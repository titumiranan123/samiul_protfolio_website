'use client';
import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  contentLabel?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, contentLabel }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label={contentLabel}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose} // Close modal when clicking overlay
    >
      <div
        className="bg-black rounded-lg shadow-lg max-w-[800px] w-full"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
