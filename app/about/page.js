import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Our Mission</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Making homeownership simpler, faster, and more accessible for everyone.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-blue-600">Who We Are</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At BetterHome, we believe in breaking barriers in the home-buying process.
            Our innovative solutions make mortgages easier and more transparent.
          </p>
        </div>
        <div className="relative h-64 md:h-80">
        <Image 
  src="https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?semt=ais_hybrid"  
  fill 
  style={{ objectFit: "cover" }}  
  alt="About Us"
/>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-center text-3xl font-bold text-blue-600">Our Values</h2>
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Transparency</h3>
            <p className="mt-2 text-gray-600">No hidden fees, no surprises—just clarity.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Speed</h3>
            <p className="mt-2 text-gray-600">Get pre-approved in minutes, not days.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Customer First</h3>
            <p className="mt-2 text-gray-600">We work for you, not the banks.</p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="text-center bg-blue-600 text-white py-20 px-6">
        <h2 className="text-3xl font-bold">Join Our Mission</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg">
          Be part of a team that is changing the future of homeownership.
        </p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
          Learn More
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; 2025 BetterHome. All rights reserved.</p>
      </footer>
    </div>
  );
}
