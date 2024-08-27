import React from 'react';

import { MotionDiv } from '@/components/motion/motion-div';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <MotionDiv animate={'ZoomIn'} duration={0.3}>
        <div className="relative min-h-[150px] w-full min-w-[400px] max-w-sm rounded-lg border-[1px] border-solid border-[#2B2D30] bg-[#1D1D1D]  p-10 shadow-lg">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 mr-4 mt-4"
          >
            <svg
              className="size-6 text-white opacity-[0.8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {children} {/* Modal content is now dynamically inserted here */}
        </div>
      </MotionDiv>
    </div>
  );
};

export default Modal;
