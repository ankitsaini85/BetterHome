"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Step3() {
  const router = useRouter();
  const [income, setIncome] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center 
      fixed top-0 left-0 right-0 z-50"> {/* ⬅ Fixed Navbar */}
        <h1 className="text-2xl font-bold text-blue-600">BetterHome</h1>
        <Link href="/">
          <button className="text-gray-600 hover:text-blue-600 transition duration-300">
            Home
          </button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center px-4 mt-20">
        {/* ⬅ Added margin-top to prevent content overlap with navbar */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center w-full max-w-lg">
          {/* ⬅ Increased padding for better spacing */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Enter Your Annual Income
          </h2>

          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="e.g. 60000"
            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          {/* ⬅ Improved input styling with focus effect */}

          <button
            onClick={() => router.push("/start/step4")}
            disabled={!income} // ⬅ Prevent navigation if input is empty
            className={`mt-6 px-6 py-3 rounded-md w-full text-lg font-semibold transition duration-300 
            ${income ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>
            {/* ⬅ Disabled button styling */}
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
