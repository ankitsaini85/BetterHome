"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function StartPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Header */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">BetterHome</h1>
        <Link href="/">
          <button className="text-gray-600 hover:text-blue-600 transition duration-300">
            Home
          </button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="mt-24 flex justify-center items-center w-full px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center w-full max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get started with your mortgage
          </h2>
          <p className="text-gray-600 mb-6">
            Answer a few quick questions to get personalized loan options.
          </p>

          <button
            onClick={() => router.push("/start/step1")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
