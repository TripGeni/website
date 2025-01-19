import axios, { AxiosRequestConfig } from "axios";

export interface WaitlistResponse {
  message?: string;
  statusCode?: number;
  error?: string;
}

export const sendWaitlistEmail = async (email: string): Promise<string> => {
  if (!email) {
    throw new Error("Email is required");
  }

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "https://tripgenie-backend.onrender.com/email/sendWaitlistMail",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email },
  };

  try {
    const response = await axios.request(config);

    if (
      response?.data?.data?.statusCode &&
      response?.data?.data?.statusCode >= 400
    ) {
      throw new Error(response.data.data.message || "An error occurred");
    }

    const res = response.data.message;

    return res;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data?.message || "Unknown error";
      throw new Error(errorMessage);
    }

    throw error;
  }
};
