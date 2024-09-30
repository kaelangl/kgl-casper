'use client';

export default function ProductDetails() {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm mb-6">
      <p className="text-gray-800 mb-4">
        The first premium foam mattress-in-a-box, The Casper works its magic and delivers unbeatable comfort night after night.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Casper Signature Foam</strong> with AirScape™ Technology increases airflow and soothes you to sleep.</li>
        <li><strong>AirScape™ Technology</strong> channels away heat and humidity.</li>
        <li><strong>Premium memory foam</strong> conforms to your body to absorb pressure.</li>
        <li><strong>ProSupport Foam</strong> prevents sinking and sagging.</li>
      </ul>
    </div>
  );
}
