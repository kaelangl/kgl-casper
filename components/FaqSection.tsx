"use client";

import { useState } from "react";

const faqData = [
  {
    title: "How does the mattress type I choose affect sleep quality?",
    content:
      "A memory foam mattress like The Casper offers excellent pressure relief, contouring to your bodys shape and providing support where needed. This is especially beneficial for combination sleepers who change positions throughout the night. The Casper is designed to ensure optimal pressure relief and support for side, back, and stomach sleepers.",
  },
  {
    title: "Do Casper mattresses sleep hot?",
    content:
      "Our mattresses are specifically designed to sleep cool. We run thermal imaging tests and sweat tests to make sure our mattresses feel nice and breezy throughout the night to keep you comfortable.",
  },
  {
    title: "What certifications do Casper mattresses have?",
    content:
      "The Casper mattress foam is CertiPUR-US® certified and the mattress cover is OEKO-TEX® certified.",
  },
  {
    title: "What should I do with my old mattress when I buy a new one?",
    content:
      "If your old mattress is on the way out but youre not sure what to do with it, weve got some ideas! Did you know that your old mattress can be recycled? Before disposing of your mattress, look into your states policies for mattress removal, as that will be the most environmentally friendly option. If you are not able to recycle it, consider donating it to a local charitable organization so that your mattress can go to someone in need. Other options include reselling it, repurposing it, or throwing it away responsibly.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
        Frequently asked questions
      </h2>
      <div className="p-4 bg-gray-100 rounded-md shadow-sm">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none bg-gray-100"
            >
              <span className="text-blue-900 font-medium text-lg">
                {item.title}
              </span>
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 text-gray-700 text-base">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
