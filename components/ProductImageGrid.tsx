"use client";

import Image from "next/image";

export default function ProductImageGrid() {
  const images = [
    "/images/mattress2.png",
    "/images/mattress3.png",
    "/images/mattress4.png",
    "/images/mattress5.png",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Product Image ${index + 2}`}
          width={500}
          height={500}
          className="w-full h-auto rounded-md object-cover"
        />
      ))}
    </div>
  );
}
