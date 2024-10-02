"use client";

import Image from "next/image";

const products = [
  {
    image: "/images/product1.png",
    title: "Original Pillow",
    price: "$89",
    rating: 4.2,
    description: "Standard or King",
  },
  {
    image: "/images/product2.png",
    title: "The Humidity Fighting Duvet",
    price: "$400",
    rating: 4.1,
    description: "Available in 3 sizes",
  },
  {
    image: "/images/product3.png",
    title: "Hybrid Pillow",
    price: "$129",
    rating: 4.5,
    description: "Standard or King",
  },
  {
    image: "/images/product4.png",
    title: "Waterproof Mattress Protector",
    price: "$109",
    rating: 4.0,
    description: "Available in 5 sizes",
  },
];

export default function HorizontalProductGrid4() {
  return (
    <div className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-blue-900 text-center">
        Elevate your sleep game
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product, index) => (
          <div key={index} className="w-64 bg-white p-4 rounded-md">
            <Image
              src={product.image}
              alt={product.title}
              width={256}
              height={256}
              className="w-full h-auto mb-4 rounded-md"
            />
            <div className="text-orange-500 text-sm mb-1">
              {"★".repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 && "☆"} {product.rating}
            </div>
            <h3 className="text-lg font-semibold text-blue-900">
              {product.title}
            </h3>
            <p className="text-gray-600 mb-1">
              From <span className="text-blue-900">{product.price}</span>
            </p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
