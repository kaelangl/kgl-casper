"use client";

export default function VideoPlayer() {
  return (
    <div className="my-8">
      <video className="w-full rounded-md" autoPlay loop muted playsInline>
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
