import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">ShopSmart</h2>
          <p className="text-sm">
            Your one-stop store for quality fashion. We bring you the best at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gray-900">Home</a></li>
            <li><a href="/shop" className="hover:text-gray-900">Shop</a></li>
            <li><a href="/about" className="hover:text-gray-900">About</a></li>
            <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-gray-900">FAQs</a></li>
            <li><a href="/returns" className="hover:text-gray-900">Return Policy</a></li>
            <li><a href="/shipping" className="hover:text-gray-900">Shipping Info</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to get special offers and updates.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-900 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
