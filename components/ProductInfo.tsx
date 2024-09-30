import Link from 'next/link';

export default function ProductInfo() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-blue-900">The Casper Mattress</h1>

      <div className="flex items-center space-x-4 mt-2">
        <span className="text-3xl font-semibold text-green-700">$1199</span>
        
        <span className="text-2xl text-gray-500 line-through">$1499</span>
        
        <span className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-md">
          20% OFF
        </span>
      </div>

      <p className="text-sm text-gray-700 mt-2 mb-4">
        Starting at $106/mo with 
        <Link href="/learn-more" className="text-blue-600 hover:underline ml-1">
          Affirm. Learn more
        </Link>
      </p>
    </div>
  );
}
