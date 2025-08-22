import React from 'react';
import Logo from './Logo';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CtasModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ctas-modal-title"
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 id="ctas-modal-title" className="text-3xl font-bold text-indigo-900 mb-6">3 Call to actions (CTAs)</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Use obvious links that stands out</p>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Buttons performs better than text links</p>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Use BIG buttons – Apple recommends a minimum touch area of 44px square</p>
              </li>
               <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Include text links</p>
              </li>
               <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Use full width buttons on mobile devices where possible</p>
              </li>
               <li className="flex items-start">
                <span className="text-indigo-600 font-bold text-2xl mr-3 mt-1">•</span>
                <p className="text-lg text-gray-700">Subject line & super subject lines</p>
              </li>
            </ul>
            <div className="bg-gray-50 border border-yellow-400 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-800">Make Everything Clickable&gt;&gt; WHY?</h3>
                <p className="mt-2 text-gray-600">CTA in brand emails is essential as it directs the HCP on what to do next—whether it's learning more, signing up to Viatris Connect or Webinar, or contacting a rep.</p>
                <p className="mt-2 text-gray-600">Especially in RX communication, where HCP attention is limited, a <strong className="text-gray-800">strong CTA ensures clarity, focus, and maximized campaign impact.</strong></p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img 
              src="https://storage.googleapis.com/generative-ai-projen-testing/user-images/image_61c028a0-2f9a-48f5-9b2f-4db38f5f4b50.png" 
              alt="Example of a strong Call To Action button on a mobile device" 
              className="max-h-[500px] h-auto object-contain"
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

export default CtasModal;