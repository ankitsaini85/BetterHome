"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Step2() {
  const router = useRouter();

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
            Tell us about the property
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => router.push("/start/step3")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md w-full">
              {/* ⬅ Full-width buttons with shadow */}
              Primary Residence
            </button>
            <button
              onClick={() => router.push("/start/step3")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md w-full">
              Second Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
