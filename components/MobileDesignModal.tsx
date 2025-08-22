import React from 'react';
import Logo from './Logo';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDesignModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-design-modal-title"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light z-20"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <div className="flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <h2 id="mobile-design-modal-title" className="text-3xl font-bold text-indigo-900 mb-6">9 Mobile design</h2>
                    <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                        <p className="text-lg text-gray-700">Why create emails for mobile devices?</p>
                    </li>
                    <li className="flex items-start">
                         <p className="text-lg text-gray-700 ml-8">A consistent customer experience!</p>
                    </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src="https://storage.googleapis.com/generative-ai-projen-testing/user-images/image_05973e8e-3253-433e-b7d1-e946a0665b1d.png"
                        alt="Statistics on device distribution for emails in Europe and mockups of responsive email design"
                        className="w-full h-auto object-contain rounded-md"
                    />
                </div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-4 pr-4">* Source: Email Marketing Facts And Statistics in 2024-25 Email Uplers Statistics</p>
        </div>
        
        <footer className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div className="flex-shrink-0">
                <Logo />
            </div>
            <p className="mt-4 md:mt-0 md:text-right max-w-md">
                For internal use, education and training purposes only. Do not duplicate, distribute or use when detailing. This document contains confidential and proprietary information of Viatris Inc. Unauthorized use, duplication, dissemination or disclosure to third parties is strictly prohibited. © 2020 Viatris Inc. All Rights Reserved.
            </p>
        </footer>
      </div>
       <style>{`
          @keyframes fade-in-scale {
            from {
              transform: scale(0.95);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-fade-in-scale {
            animation: fade-in-scale 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1);
          }
        `}</style>
    </div>
  );
};

export default MobileDesignModal;