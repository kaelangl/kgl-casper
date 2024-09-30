'use client';

export default function ProductImageGrid() {
  const images = [
    '/images/mattress2.png',
    '/images/mattress3.png',
    '/images/mattress4.png',
    '/images/mattress5.png',
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Product Image ${index + 2}`}
          className="w-full h-auto rounded-md"
        />
      ))}
    </div>
  );
}
