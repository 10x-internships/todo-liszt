import { createContext, useState, useContext } from "react";

type ToastTypes = {
  id?: string;
  message: string;
  state: "error" | "success";
};

interface IToastContext {
  toastList: ToastTypes[];
  addToast: (toastInfo: {
    message: string;
    state: "error" | "success";
  }) => void;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastContext = createContext<IToastContext | null>(null);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toastList, setToastList] = useState<ToastTypes[]>([]);

  const addToast = (toastInfo: {
    message: string;
    state: "error" | "success";
  }) => {
    const id = new Date().toISOString();

    const newToast = {
      ...toastInfo,
      id,
    };
    setToastList((prevToastList) => [...prevToastList, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id: string) => {
    setToastList((prev) => prev.filter((toast) => toast.id !== id));
  };

  const value = {
    toastList,
    addToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
