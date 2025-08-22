import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const kpis = [
  { name: "Open Rate %", why: "Measures effectiveness of subject lines and brand recognition.", insight: "Indicates how compelling the message is at first glance." },
  { name: "Click to Opens Rate %", why: "Shows engagement with the email content and CTA relevance.", insight: "Identifies what drives user interest and actions." },
  { name: "Unsubscribe Rate %", why: "Signals content fatigue or targeting issues.", insight: "Guides frequency and content quality adjustments." },
  { name: "Conversion Rate", why: "Reflects responsiveness by tracking desired actions (e.g., registration, signup).", insight: "Links email effectiveness directly to conversion goals." },
  { name: "NPS", why: "Shows customer satisfaction and brand advocacy through email feedback.", insight: "Provides qualitative insights into brand sentiment and loyalty." },
  { name: "Bounce Rate", why: "Indicates email list health and deliverability issues.", insight: "Helps clean lists and improve sender reputation." },
];

const KpiCard: React.FC<{ name: string; why: string; insight: string; }> = ({ name, why, insight }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={`p-6 rounded-xl shadow-lg border border-gray-200 bg-white scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <h3 className="text-2xl font-bold text-purple-700 mb-3">{name}</h3>
      <p className="font-semibold text-gray-800">Why it matters: <span className="font-normal text-gray-600">{why}</span></p>
      <p className="font-semibold text-gray-800 mt-2">Insight gained: <span className="font-normal text-gray-600">{insight}</span></p>
    </div>
  );
};

const KpiSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {kpis.map((kpi, index) => (
        <KpiCard key={index} name={kpi.name} why={kpi.why} insight={kpi.insight} />
      ))}
    </div>
  );
};

export default KpiSection;