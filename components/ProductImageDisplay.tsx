"use client";

import Image from "next/image";

export default function ProductImageDisplay() {
  return (
    <div className="w-full">
      <Image
        src="/images/mattress1.png"
        alt="Product Image"
        width={1200} // Adjust width as needed
        height={800} // Adjust height as needed
        className="w-full h-auto rounded-md"
      />
    </div>
  );
}
