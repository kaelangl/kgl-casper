'use client';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-2">
        <div className="flex flex-wrap w-full lg:w-1/2">
          {/* Column 1: Products */}
          <div className="w-1/2 sm:w-1/5">
            <h3 className="font-bold mb-2 text-sm">Products</h3>
            <ul className="space-y-1 text-xs">
              <li>Mattresses</li>
              <li>Pillows</li>
              <li>Bed Frames</li>
              <li>Sheets</li>
              <li>Duvets</li>
              <li>Glow Light</li>
              <li>Dog Bed</li>
            </ul>
          </div>

          {/* Column 2: Shop by Size */}
          <div className="w-1/2 sm:w-1/5">
            <h3 className="font-bold mb-2 text-sm">Shop by Size</h3>
            <ul className="space-y-1 text-xs">
              <li>Twin</li>
              <li>Twin XL</li>
              <li>Full</li>
              <li>Queen</li>
              <li>King</li>
              <li>Size Guide</li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="w-1/2 sm:w-1/5">
            <h3 className="font-bold mb-2 text-sm">Support</h3>
            <ul className="space-y-1 text-xs">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Returns</li>
              <li>Trial</li>
              <li>Warranty</li>
              <li>Financing</li>
            </ul>
          </div>

          {/* Column 4: About */}
          <div className="w-1/2 sm:w-1/5">
            <h3 className="font-bold mb-2 text-sm">About</h3>
            <ul className="space-y-1 text-xs">
              <li>Our Story</li>
              <li>Casper Labs</li>
              <li>Stores</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div className="w-1/2 sm:w-1/5">
            <h3 className="font-bold mb-2 text-sm">Resources</h3>
            <ul className="space-y-1 text-xs">
              <li>Mattress Quiz</li>
              <li>Mattress Buying Guide</li>
              <li>Reviews</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col items-start lg:items-end space-y-4">
          <h3 className="font-bold text-sm">Sign up for the latest snooze</h3>
          <form className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded-l-md w-full text-black text-xs"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded-r-md text-xs"
            >
              Submit
            </button>
          </form>
          <div className="text-xs mt-2">
            <p>1 (888) 828-5448</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-center py-2 mt-4 text-xs">
        <p>© 2024 Privacy Terms Accessibility</p>
      </div>
    </footer>
  );
}
