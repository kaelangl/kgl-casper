"use client";

import { useState } from "react";

export default function ProductOptions() {
  const [selectedSize, setSelectedSize] = useState("Queen");

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${selectedSize} size to the cart.`);
  };

  return (
    <div className="p-4 mt-4 w-full max-w-lg mx-auto shadow-md bg-white rounded-md">
      <div className="mb-4">
        <label
          htmlFor="size-selector"
          className="block text-md font-medium text-gray-800 mb-2"
        >
          Select your size
        </label>
        <select
          id="size-selector"
          value={selectedSize}
          onChange={handleSizeChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          <option value="Twin">Twin</option>
          <option value="Full">Full</option>
          <option value="Queen">Queen</option>
          <option value="King">King</option>
          <option value="California King">California King</option>
        </select>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full py-3 bg-blue-900 text-white text-lg font-medium rounded-md shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
      >
        Add to Cart
      </button>

      <p className="text-sm text-green-700 mt-4 flex items-center">
        <span className="inline-block w-2 h-2 bg-green-700 rounded-full mr-2"></span>
        In-stock, ships within 3-5 days | Free shipping & returns
      </p>
    </div>
  );
}
