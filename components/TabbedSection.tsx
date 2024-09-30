'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabData = [
  {
    title: 'GET COZY',
    content: (
      <>
        <p className="text-3xl font-bold text-blue-900 mb-4">Comfort from the moment you crawl into bed.</p>
        <p className="text-xl font-semibold text-blue-900 mb-2">Cozy Knit Cover</p>
        <p className="text-lg text-gray-600">
          A soft knit cover designed with added stretch so you can experience all the comfort your mattress has to offer.
        </p>
      </>
    ),
    image: '/images/getcozy.png',
  },
  {
    title: 'FALL ASLEEP',
    content: (
      <>
        <p className="text-3xl font-bold text-blue-900 mb-4">Features designed to lull you to sleep.</p>
        <p className="text-xl font-semibold text-blue-900 mb-2">Casper Signature™ Foam with AirScape® Technology</p>
        <p className="text-lg text-gray-600">
          A responsive layer of foam is designed to soothe you to sleep with the perfect bit of bounce, while added AirScape® Technology keeps you at a comfortable temperature all night.
        </p>
      </>
    ),
    image: '/images/fallasleep.png',
  },
  {
    title: 'STAY ASLEEP',
    content: (
      <>
        <p className="text-3xl font-bold text-blue-900 mb-4">Sleep deeper and without interruptions.</p>
        <p className="text-xl font-semibold text-blue-900 mb-2">Premium Memory Foam</p>
        <p className="text-lg text-gray-600">
          Absorbs pressure and cradles your body to help you stay asleep.
        </p>
        <p className="text-xl font-semibold text-blue-900 mt-4 mb-2">ProSupport Foam</p>
        <p className="text-lg text-gray-600">
          A firm base layer of foam provides long-lasting support while preventing sinking and sagging.
        </p>
      </>
    ),
    image: '/images/stayasleep.png',
  },
];

export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-8 p-4 bg-white rounded-md shadow-sm md:flex md:space-x-8">
      <div className="md:w-1/3">
        <div className="flex space-x-4 mb-4">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`pb-2 ${
                activeTab === index
                  ? 'border-b-2 border-blue-500 text-blue-900 font-bold text-lg'
                  : 'text-gray-500 text-lg'
              } uppercase`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div>{tabData[activeTab].content}</div>
      </div>

      <div className="md:w-2/3 mt-4 md:mt-0">
        <Image
          src={tabData[activeTab].image}
          alt={tabData[activeTab].title}
          width={1200}  // Adjust width as needed
          height={800}  // Adjust height as needed
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
}
