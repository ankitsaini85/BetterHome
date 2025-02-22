"use client";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center 
      fixed top-0 left-0 right-0 z-50"> {/* ⬅ Fixed Navbar */}
        <h1 className="text-2xl font-bold text-green-600">BetterHome</h1>
        <Link href="/">
          <button className="text-gray-600 hover:text-green-600 transition duration-300">
            Home
          </button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center px-4 mt-20">
        {/* ⬅ Added margin-top to prevent overlap with navbar */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center w-full max-w-lg">
          {/* ⬅ Increased padding for better spacing */}
          <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Success!</h2>
          {/* ⬅ Made heading larger for emphasis */}
          <p className="text-gray-600 mb-6 text-lg">
            Your mortgage application has been submitted successfully. Our team will contact you soon with the next steps.
          </p>

          <Link href="/">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium
            hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md w-full">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
 