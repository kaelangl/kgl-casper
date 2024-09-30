'use client';

import { useState } from 'react';

const accordionData = [
  { title: 'Measurements & dimensions', content: 'Detailed measurements and dimensions information goes here.' },
  { title: 'Materials & certifications', content: '' },
  { title: 'Warranty & shipping', content: 'Warranty and shipping details go here.' },
];

export default function ProductAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
          >
            <span className="text-gray-800 font-medium text-xl">{item.title}</span>
            <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-600 text-lg">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
