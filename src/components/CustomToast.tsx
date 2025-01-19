import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../app/globals.css";

interface CustomToastProps {
  title?: string;
  message?: string;
  type?: "success" | "info" | "warning" | "error";
}

const CustomToast: React.FC<CustomToastProps> = ({
  title,
  message,
  type = "info",
}) => {
  const [activeToast, setActiveToast] = useState<string | null>(null); // Track active toast ID

  useEffect(() => {
    if (message) {
      // Check if the same message is already active
      if (activeToast === message) {
        return; // Prevent showing the same toast again
      }

      const toastOptions: ToastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        onClose: () => {
          // Reset the active toast after it closes
          setActiveToast(null);
        },
      };

      // Custom render for title and message
      const renderToast = () => (
        <div>
          {title && (
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>{title}</div>
          )}
          <div>{message}</div>
        </div>
      );

      // Set a unique toastId based on the message to track the active toast
      const id = `${type}-${message}`;
      setActiveToast(id);

      switch (type) {
        case "success":
          toast.success(renderToast(), { ...toastOptions, toastId: id });
          break;
        case "info":
          toast.info(renderToast(), { ...toastOptions, toastId: id });
          break;
        case "warning":
          toast.warning(renderToast(), { ...toastOptions, toastId: id });
          break;
        case "error":
          toast.error(renderToast(), { ...toastOptions, toastId: id });
          break;
        default:
          toast(renderToast(), { ...toastOptions, toastId: id });
      }
    }
  }, [message, type, title, activeToast]);

  return <ToastContainer />;
};

export default CustomToast;
