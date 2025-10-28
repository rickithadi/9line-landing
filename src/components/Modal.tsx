import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white border border-slate-200 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-50 transition-colors"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>
        
        {children}
      </div>
    </div>
  );
}