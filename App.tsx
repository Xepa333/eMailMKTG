import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import DataCharts from './components/DataCharts';
import Tips from './components/Tips';
import Quiz from './components/Quiz';
import Checklist from './components/Checklist';
import KpiSection from './components/KpiSection';
import BackgroundBalloons from './components/BackgroundBalloons';
import Header from './components/Header';

const App: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalScrollableHeight = scrollHeight - clientHeight;
      if (totalScrollableHeight > 0) {
        const currentProgress = (scrollTop / totalScrollableHeight) * 100;
        setProgress(Math.min(100, currentProgress));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={scrollContainerRef} className="bg-white text-gray-800">
      <BackgroundBalloons />
      <Header />
      <div 
        style={{ width: `${progress}%` }} 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 z-50 transition-all duration-300 ease-out"
      />
      
      <div className="relative z-10">
        <main className="container mx-auto px-4 md:px-8">
          <Hero />
          <Section id="why" title="The Why: Still Talking Email in 2025?">
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600">
              In an age of widespread AI, email remains a dominant force in digital communication and marketing. The numbers speak for themselves.
            </p>
            <DataCharts />
          </Section>
          <Section id="how" title="The How: 10 Tips for Email Best Practice">
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600">
              Mastering email marketing requires a blend of art and science. Here are 10 foundational tips to elevate your campaigns.
            </p>
            <Tips />
          </Section>
          <Section id="quiz" title="Test Your Knowledge">
            <Quiz />
          </Section>
          <Section id="checklist" title="Final Checklist: Before You Send">
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600">
              A quick check can make all the difference. Run through this list to ensure your email is primed for success.
            </p>
            <Checklist />
          </Section>
          <Section id="kpis" title="Understanding Email KPIs">
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600">
              Key Performance Indicators (KPIs) are your compass for navigating email marketing effectiveness. Know what to measure and why it matters.
            </p>
            <KpiSection />
          </Section>
        </main>
        <footer className="text-center py-8 border-t border-gray-200 bg-white">
          <p className="text-gray-500">Viatris eMail Marketing Excellence Guide</p>
        </footer>
      </div>
    </div>
  );
};

export default App;