
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex flex-wrap justify-between items-center px-4 md:px-10 lg:px-16">
        <h1 className="text-2xl font-bold text-blue-600">BetterHome</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>

        </div>
        <div className="flex items-center space-x-4">
          <Link href="/mortgage-calculator">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Mortgage Calculator
            </button>
          </Link>
          <Link href="/start">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-500 text-white px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">A Simpler Way to Buy a Home</h2>
        <p className="mt-4 text-base sm:text-lg">No commissions, no hidden fees, just better home buying.</p>
        <Link href="/start">
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
          Start Now
        </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="p-6 md:p-10 lg:p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-md rounded-md text-center">
          <h3 className="text-lg md:text-xl font-semibold text-blue-600">Low Fees</h3>
          <p className="mt-2 text-gray-600">Save thousands with no hidden costs.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md text-center">
          <h3 className="text-lg md:text-xl font-semibold text-blue-600">Fast Processing</h3>
          <p className="mt-2 text-gray-600">Get pre-approved in minutes.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md text-center">
          <h3 className="text-lg md:text-xl font-semibold text-blue-600">Expert Support</h3>
          <p className="mt-2 text-gray-600">We guide you every step of the way.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-6 md:p-10 lg:p-16 bg-gray-200 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600">What Our Customers Say</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-md">
            <p className="text-gray-600">"BetterHome made the home buying process so easy and stress-free!"</p>
            <h4 className="mt-4 font-semibold text-blue-600">- Sarah M.</h4>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <p className="text-gray-600">"I saved thousands in fees and got my dream home! Highly recommend."</p>
            <h4 className="mt-4 font-semibold text-blue-600">- James L.</h4>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <p className="text-gray-600">"A seamless experience from start to finish. Thank you BetterHome!"</p>
            <h4 className="mt-4 font-semibold text-blue-600">- Emily R.</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p>&copy; 2025 BetterHome. All rights reserved.</p>
      </footer>
    </div>
  );
}

