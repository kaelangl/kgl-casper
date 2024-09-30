'use client';

export default function FullBleedHeroStatement() {
  return (
    <div
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] bg-cover bg-center py-16 my-8"
      style={{ backgroundImage: `url('/images/banner-bg.png')` }}
    >
      <h2 className="text-center text-white text-2xl md:text-4xl font-bold">
        The mattress loved by millions is back.
      </h2>
    </div>
  );
}
