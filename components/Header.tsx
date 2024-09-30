import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white text-blue-900 px-4 py-2 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/casper_logo.png"
              alt="Casper Logo"
              width={120} // Set a specific width
              height={40} // Set a specific height to maintain aspect ratio
              objectFit="contain" // Maintain original dimensions and aspect ratio
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/mattresses" className="hover:underline">
            Mattresses
          </Link>
          <Link href="/pillows" className="hover:underline">
            Pillows
          </Link>
          <Link href="/bedding" className="hover:underline">
            Bedding
          </Link>
          <Link href="/sheets" className="hover:underline">
            Sheets
          </Link>
          <Link href="/furniture" className="hover:underline">
            Furniture
          </Link>
          <Link href="/accessories" className="hover:underline">
            Accessories
          </Link>
          <Link href="/sales" className="hover:underline text-red-500">
            Sales and Offers
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-white text-black border border-gray-300">
            🛒
          </button>
        </div>
      </div>
    </header>
  );
}
