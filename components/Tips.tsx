import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CompellingContentModal from './CompellingContentModal';
import LayoutModal from './LayoutModal';
import CtasModal from './CtasModal';
import TypographyModal from './TypographyModal';
import UniformityModal from './UniformityModal';
import ColourModal from './ColourModal';
import SubjectLinesModal from './SubjectLinesModal';
import ImageryModal from './ImageryModal';
import MobileDesignModal from './MobileDesignModal';
import TestingModal from './TestingModal';


const tips = [
  { title: "1. Compelling Content", description: "People scan, not read. Use F-shaped or Z-shaped patterns. Keep text short, relevant, and personalized." },
  { title: "2. Smart Layout", description: "Use a clear hierarchy: Header, Intro (most important info), Secondary Info, Footer. Make it eye-catching." },
  { title: "3. Strong Call to Actions (CTAs)", description: "Use obvious, big buttons (min 44px). Buttons perform better than text links. Make everything clickable." },
  { title: "4. Clear Typography", description: "Ensure readability on all screen sizes. Use high contrast text (e.g., black on white). Header > 20px, Body > 13px." },
  { title: "5. Uniformity & Consistency", description: "Use constant design elements (logos, headers). Keep emails narrow (600px width) for readability. Use a clean template." },
  { title: "6. Strategic Colour", description: "Use standard brand colours consistently to build recognition and trust. VITA is your helper for brand guidelines." },
  { title: "7. Effective Subject Lines", description: "Keep it under 50 characters. Use numbers, questions, and scarcity. Always A/B test to optimize." },
  { title: "8. Purposeful Imagery", description: "Avoid putting text in images. Use natural photography and double image size for Retina displays. GIFs can draw attention." },
  { title: "9. Mobile-First Design", description: "With over 50% of emails opened on mobile, a consistent, responsive experience is crucial." },
  { title: "10. Rigorous Testing", description: "Don't just preview in a browser. Test on main email providers (Gmail, Outlook, Apple Mail) as they render emails differently." },
];

const TipCard: React.FC<{ title: string, description: string, onClick?: () => void }> = ({ title, description, onClick }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const isClickable = !!onClick;

  return (
    <div 
      ref={ref} 
      onClick={onClick}
      className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform ${isClickable ? 'hover:scale-105 hover:border-purple-500 cursor-pointer' : ''} transition-all duration-300 scroll-reveal ${isVisible ? 'visible' : ''}`}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : -1}
      onKeyDown={isClickable ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
      aria-haspopup={isClickable ? "dialog" : undefined}
    >
      <h3 className="text-xl font-bold mb-3 text-purple-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Tips: React.FC = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
            <TipCard 
              key={index} 
              title={tip.title} 
              description={tip.description} 
              onClick={() => setOpenModalIndex(index)}
            />
        ))}
      </div>
      <CompellingContentModal isOpen={openModalIndex === 0} onClose={() => setOpenModalIndex(null)} />
      <LayoutModal isOpen={openModalIndex === 1} onClose={() => setOpenModalIndex(null)} />
      <CtasModal isOpen={openModalIndex === 2} onClose={() => setOpenModalIndex(null)} />
      <TypographyModal isOpen={openModalIndex === 3} onClose={() => setOpenModalIndex(null)} />
      <UniformityModal isOpen={openModalIndex === 4} onClose={() => setOpenModalIndex(null)} />
      <ColourModal isOpen={openModalIndex === 5} onClose={() => setOpenModalIndex(null)} />
      <SubjectLinesModal isOpen={openModalIndex === 6} onClose={() => setOpenModalIndex(null)} />
      <ImageryModal isOpen={openModalIndex === 7} onClose={() => setOpenModalIndex(null)} />
      <MobileDesignModal isOpen={openModalIndex === 8} onClose={() => setOpenModalIndex(null)} />
      <TestingModal isOpen={openModalIndex === 9} onClose={() => setOpenModalIndex(null)} />
    </>
  );
};

export default Tips;