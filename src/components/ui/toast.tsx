import React, { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

type ToastProps = {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning';
};

type ToastContextType = {
  toasts: ToastProps[];
  showToast: (toast: Omit<ToastProps, 'id'>) => void;
  dismissToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = ({ title, description, variant = 'default' }: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prevToasts) => [...prevToasts, { id, title, description, variant }]);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      dismissToast(id);
    }, 5000);
  };

  const dismissToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, dismissToast }}>
      {children}
      <ToastContainer toasts={toasts} dismissToast={dismissToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

function ToastContainer({ toasts, dismissToast }: { toasts: ToastProps[], dismissToast: (id: string) => void }) {
  return (
    <div className="fixed bottom-0 right-0 p-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDismiss={() => dismissToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function Toast({ id, title, description, variant = 'default', onDismiss }: ToastProps & { onDismiss: () => void }) {
  const variantClassNames = {
    default: 'bg-white text-foreground border-slate-200',
    success: 'bg-white border-success text-foreground',
    error: 'bg-white border-error text-foreground',
    warning: 'bg-white border-warning text-foreground',
  };

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'p-4 rounded-lg shadow-lg border-l-4 w-80 flex flex-col',
        variantClassNames[variant]
      )}
    >
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-sm">{title}</h4>
        <button onClick={onDismiss} className="text-gray-400 hover:text-gray-500">
          <XIcon size={16} />
        </button>
      </div>
      {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
    </motion.div>
  );
}