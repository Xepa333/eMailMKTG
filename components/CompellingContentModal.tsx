import React from 'react';
import Logo from './Logo';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompellingContentModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="compelling-content-title"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light z-20"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Text Content */}
          <div>
            <h2 id="compelling-content-title" className="text-3xl font-bold text-indigo-900 mb-6">1 Compelling content</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700"><strong>People don't read...</strong> they scan!</p>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Eye tracking visualizations show that users often read online content in an <span className="text-teal-500 font-semibold">F-shaped pattern or Z-shaped pattern</span></p>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Keep text short, relevant and to the point</p>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Send messages that are relevant to the recipient</p>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Personalise content, e.g. specialty based</p>
              </li>
            </ul>
          </div>

          {/* Right Column: Diagram */}
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4 lg:p-6 border border-gray-200">
            <img 
              src="https://github.com/Xepa333/eMailMKTG/blob/main/img/Patterns.png" 
              alt="Diagram showing Z-shaped scanning pattern for web content" 
              className="w-full h-auto object-contain rounded-md shadow-sm"
            />
          </div>
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

export default CompellingContentModal;
