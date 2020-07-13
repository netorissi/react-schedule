import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToasterNotify from '../components/Toaster';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(msg => msg.id !== id));
  }, []);

  const addToast = useCallback(
    (message: Omit<ToastMessage, 'id'>) => {
      const toast = { ...message, id: uuid() };
      setMessages([...messages, toast]);
      setTimeout(() => removeToast(toast.id), 4000);
    },
    [messages, removeToast],
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToasterNotify messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error(
      "Error using useToast because ToasTContext don't instanced",
    );

  return context;
}
