'use client';

export default function QuestionsCallout() {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Got questions?</h3>
      <p className="text-sm text-gray-700 mb-4">
        Speak with our award-winning customer service or book a virtual appointment with a Sleep Specialist from our stores.
      </p>
      <button className="w-full py-2 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Chat with Us
      </button>
    </div>
  );
}
