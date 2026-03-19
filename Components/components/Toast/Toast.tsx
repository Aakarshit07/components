"use client";

import { useEffect } from "react";

type ToastProps = {
  message?: string;
  title?: string;
  potition?: string;
  variant?: string;
  onClose: (id: string) => void;
  duration?: number;
  id: string;
};

type toastType = {
  success: string;
  error: string;
  info: string;
  warning: string;
};

const Toast = ({
  title,
  message,
  variant = "info",
  onClose,
  duration = 3000,
  id,
}: ToastProps) => {
  // Each toast mantains its own timer state.
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, onClose, duration]);

  const toastType: toastType = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div
      className={`rounded-lg shadow-md flex items-center justify-stretch gap-2 md:gap-6 max-w-xs p-2 ${toastType[variant]}`}
    >
      <div>
        {title && <div className="font-semibold">{title}</div>}
        {message && <div>{message}</div>}
      </div>
      <div className="p-2">
        <button
          onClick={() => onClose(id)}
          className="cursor-pointer p-2 border"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Toast;
