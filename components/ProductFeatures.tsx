'use client';

export default function ProductFeatures() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-6 rounded-md">
        <h2 className="text-center text-2xl font-bold text-blue-900">
          Inspired by the mattress that started it all
        </h2>
      </div>

      <div className="bg-gray-100 p-6 rounded-md">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="flex flex-col items-center text-center">
            <img src="/icons/icon_signaturefoam.svg" alt="Signature Foam" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Casper Signature Foam</h3>
            <p className="text-gray-700 mt-2">
              Our uniquely responsive layer of foam is designed to soothe you to sleep with the perfect bit of bounce.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/icons/icon_airscape.svg" alt="AirScape Technology" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">AirScape™</h3>
            <p className="text-gray-700 mt-2">
              Thousands of perforations in a breathable foam help keep you comfortably cool all night.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
