import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442"
              alt="Car"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to Firdavs’ Market, a modern platform built to make
              buying, selling, and renting cars simple and secure. Our mission
              is to connect people through a fast, trustworthy, and
              user-friendly online experience. We believe that every customer
              should have access to clear information, transparent listings, and
              reliable communication. That’s why our platform provides easy
              navigation, verified car details, and a smooth posting process for
              sellers. Whether you are looking for your next car or want to list
              your own vehicle, Firdavs’ Market offers the tools to help you do
              it quickly and confidently. Driven by quality, designed with care
              — your car journey starts here.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-2xl font-bold">836M</h3>
            <p className="text-gray-500">CARS FOR SALE</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">738M</h3>
            <p className="text-gray-500">DEALER REVIEWS</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100M</h3>
            <p className="text-gray-500">VISITORS PER DAY</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">238M</h3>
            <p className="text-gray-500">VERIFIED USERS</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-14">Why Choose Us?</h2>

    <div className="grid md:grid-cols-4 gap-12">

      {/* Verified Listings */}
      <div>
        <div className="mb-4">
          <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
        <h4 className="font-semibold text-lg mb-2">Verified Listings</h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Every car is checked for accurate details, giving users confidence in every deal.
        </p>
      </div>

      {/* Multiple Options */}
      <div>
        <div className="mb-4">
          <svg
            className="w-12 h-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-2">Multiple Options</h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Whether you want to buy, sell, or rent, our platform offers all services in one place.
        </p>
      </div>

      {/* Real Owners */}
      <div>
        <div className="mb-4">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a6.5 6.5 0 0113 0" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-2">Real Owners, Real Prices</h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          We focus on fair, honest pricing directly from car owners.
        </p>
      </div>

      {/* Fast Search */}
      <div>
        <div className="mb-4">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-2">Fast Search & Filters</h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Smart filters help you quickly find the perfect car for your needs.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">What our customers say</h2>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Customer"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h4 className="font-semibold">Kevin Smith</h4>
            <p className="text-yellow-500 mb-3">★★★★★</p>
            <p className="text-gray-600 text-sm">
              Amazing platform! I found the perfect car quickly, and the whole
              process was simple and secure. Highly recommended!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Are You Looking For a Car?
            </h3>
            <p className="text-gray-600 mb-4">
              Browse our inventory and find your dream vehicle today.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Browse Cars
            </button>
          </div>

          <div className="bg-pink-100 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Do You Want to Sell a Car?
            </h3>
            <p className="text-gray-600 mb-4">
              List your vehicle easily and connect with buyers instantly.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Sell Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-lg font-semibold mb-4">Join Our Marketplace</h4>
          <p className="text-sm text-gray-300">
            Browse listings, find deals, and sell your car with confidence.
          </p>
        </div>
      </footer>
    </div>
  );
}
