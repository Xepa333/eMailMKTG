import React from 'react';
import Logo from './Logo';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubjectLinesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="subject-lines-modal-title"
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
        
        <div>
            <h2 id="subject-lines-modal-title" className="text-3xl font-bold text-indigo-900 mb-6">7 Subject lines</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 space-y-3 text-gray-700 text-lg">
                    <p className="font-bold text-xl text-gray-800">Tips for success:</p>
                    <p>◻️ Email Subject Lines with <span className="font-semibold">Numbers</span></p>
                    <p>◻️ <span className="font-semibold">Questions & Other Punctuation</span> in Email Subject Lines</p>
                    <p>◻️ <span className="font-semibold">"Missing Out" & Other Scarcity</span> Tactics in Subject Lines</p>
                    <p>◻️ <span className="font-semibold">Keep it under 50 characters.</span> Subject lines with less than 50 characters have higher open rates and click-through-rates than those with 50+.</p>
                    <p>Even better: <span className="font-semibold">3 WORD SUBJECT LINE!</span></p>
                    <p>◻️ <span className="font-semibold">More caps ≠ More opens.</span> Covering your subject line in caps WILL NOT HELP YOU. Caps are powerful, but not to be trifled with. Use them responsibly.</p>
                    <p>◻️ <span className="font-semibold">Pay attention to the pre-header.</span> The email preview that follows the subject line is a valuable piece of property, and yet so many businesses ignore it or let it get filled with garbage text</p>
                </div>
                 <div className="lg:w-1/2 flex items-center justify-center">
                     <img 
                      src="https://storage.googleapis.com/generative-ai-projen-testing/user-images/image_e8b94101-72f1-4df2-8e10-c115797d391f.png"
                      alt="Diagrams explaining subject line components and A/B testing ideas" 
                      className="w-full h-auto object-contain rounded-md"
                    />
                </div>
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

export default SubjectLinesModal;