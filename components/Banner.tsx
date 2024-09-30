'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const phrases = [
  'Enjoy free shipping and easy returns. Rest easy with our 100-night risk-free trial!',
  'Curious? Our Sleep Specialists are just a call away.',
];

export default function Banner() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Banner countdown
    const targetDate = new Date('2024-10-31T23:59:59');

    // Function to update the countdown
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdown('Sale ended!');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown(`Fall sale ends in: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`);
    };

    // Initial call to set the countdown immediately
    updateCountdown();

    // Update the countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Interval to change phrases every 5 seconds
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % (phrases.length + 1)); // Include countdown in rotation
    }, 5000); // Change phrase every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handler to cycle text forward
  const handleNext = () => {
    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % (phrases.length + 1));
  };

  // Handler to cycle text backward
  const handlePrev = () => {
    setCurrentPhraseIndex((prevIndex) => (prevIndex - 1 + (phrases.length + 1)) % (phrases.length + 1));
  };

  // Determine which text to display
  const displayedText = currentPhraseIndex === 0 ? countdown : phrases[currentPhraseIndex - 1];

  return (
    <div className="w-full bg-blue-900 text-white py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section: EN | FR */}
        <div className="text-sm md:text-base">
          <button className="mr-4">EN | FR</button>
        </div>

        {/* Center Section: Rotating Phrases with Arrows */}
        <div className="flex items-center justify-center space-x-4" style={{ width: '700px' }}>
          {/* Previous Arrow */}
          <button onClick={handlePrev} className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Rotating Phrases */}
          <div className="text-center text-sm md:text-base transition-transform duration-1000 ease-in-out w-full">
            {displayedText}
          </div>

          {/* Next Arrow */}
          <button onClick={handleNext} className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Section: Find a store with an icon */}
        <div className="text-sm md:text-base flex items-center">
          <Link href="/find-store" className="hover:underline flex items-center">
            <span>Find a store</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.134-7 7-7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
