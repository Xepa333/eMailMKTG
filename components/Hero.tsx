import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-white pt-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-700">
          eMail Marketing Excellence
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mt-6">
          An interactive journey to master the art and science of email marketing.
        </p>
        <div className="mt-12">
           <svg className="animate-bounce w-10 h-10 text-purple-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-purple-600 mt-2">Scroll to Begin</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;