"use client";

import { createContext, useState, useContext } from "react";
import ToastContainer from "../ToastContainer/ToastContainer";

export type Toast = {
  id: string;
  title?: string;
  message?: string;
  variant: "success" | "error" | "warning" | "info";
  duration?: number;
};

type ToastContextProps = {
  addToast: (
    message: string,
    variant: Toast["variant"],
    title?: string,
    duration?: number,
  ) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Add Toast
  const addToast = (
    message: string,
    variant: Toast["variant"],
    title?: string,
    duration?: number,
  ) => {
    // Create Toast object
    const id = String(Date.now());
    const newToast: Toast = {
      id,
      message,
      variant,
      title,
      duration,
    };

    setToasts((prev) => [...prev, newToast]);
  };

  // Remove Toast
  const removeToast = (id: string) => {
    console.log("id", id, toasts);
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {/* passing more stuff using object */}
      {children}
      <ToastContainer
        toasts={toasts}
        position="top-left"
        onClose={removeToast}
      />
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};
