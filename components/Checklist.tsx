import React, { useState } from 'react';

const checklistItems = [
  { category: "Name of sender", point: "Is the sender human (not noreply@) and known to the recipient?" },
  { category: "Subject", point: "Is it relevant, under 50 characters, and designed to grab attention?" },
  { category: "Pre-header", point: "Does the pre-header text provide valuable info to encourage opening?" },
  { category: "Salutation", point: "Is the salutation correct and personalized? Is there a default?" },
  { category: "Body", point: "Is the content concise ('less is more') with clear key messages?" },
  { category: "Call to action", point: "Is the CTA singular, clear, and visible without scrolling?" },
  { category: "Footer", point: "Does it include an unsubscribe link, privacy policy, and contact info?" },
];

const Checklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleToggle = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };
  
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = checklistItems.length;
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-purple-700">Progress</span>
                <span className="font-bold text-gray-700">{checkedCount} / {totalCount}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
      
      <div className="space-y-4">
        {checklistItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`flex items-start p-4 rounded-lg cursor-pointer transition-all duration-300 ${checkedItems[index] ? 'bg-green-100 border-green-400' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} border`}
          >
            <div className="flex items-center h-6">
              <input
                id={`checkbox-${index}`}
                aria-describedby={`checkbox-text-${index}`}
                type="checkbox"
                checked={!!checkedItems[index]}
                readOnly
                className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>
            <div className="ml-4 text-sm">
              <label htmlFor={`checkbox-${index}`} className="font-medium text-gray-800 cursor-pointer">
                {item.category}
              </label>
              <p id={`checkbox-text-${index}`} className="text-gray-500 cursor-pointer">{item.point}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;