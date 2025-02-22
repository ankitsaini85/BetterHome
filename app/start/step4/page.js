"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Step4() {
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
        {/* ⬅ Added margin-top to prevent overlap with navbar */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center w-full max-w-lg">
          {/* ⬅ Increased padding for better spacing */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            What is your credit score range?
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {[
              { range: "740+ (Excellent)", link: "/start/step5" },
              { range: "680 - 739 (Good)", link: "/start/step5" },
              { range: "620 - 679 (Fair)", link: "/start/step5" },
              { range: "Below 620 (Poor)", link: "/start/step5" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => router.push(item.link)}
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium
                hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md"
              >
                {item.range}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
