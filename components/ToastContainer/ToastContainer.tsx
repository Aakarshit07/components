import Toast from "../Toast/Toast";

export type ToastData = {
  id: string;
  title?: string;
  message?: string;
  variant: "success" | "error" | "warning" | "info";
  duration?: number;
};

type ToastContainerProps = {
  toasts: ToastData[];
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  onClose: (id: string) => void;
};

const ToastContainer = ({
  toasts,
  position = "top-left",
  onClose,
}: ToastContainerProps) => {
  // Position styles mapping
  const positions = {
    "top-right": "top-4 right-10",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  return (
    <div className={`z-50 fixed ${positions[position]} flex flex-col gap-2`}>
      {toasts &&
        toasts?.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={onClose} />
        ))}
    </div>
  );
};

export default ToastContainer;
