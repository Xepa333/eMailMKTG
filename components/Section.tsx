import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className={`py-20 md:py-28 scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;