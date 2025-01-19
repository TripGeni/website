import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CustomToastProps {
  message?: string; // Making message optional
}

const CustomToast: React.FC<CustomToastProps> = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast(message); // Only call toast if message exists
    }
  }, [message]);

  return <ToastContainer />;
};

export default CustomToast;
