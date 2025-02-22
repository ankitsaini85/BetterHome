// "use client"; // Enable client-side rendering

// import { useState } from "react";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";

// const MortgageCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState(300000);
//   const [downPayment, setDownPayment] = useState(60000);
//   const [interestRate, setInterestRate] = useState(3.5);
//   const [loanTerm, setLoanTerm] = useState(30);
//   const [propertyTax, setPropertyTax] = useState(265);
//   const [hoaFees, setHoaFees] = useState(0);

//   const calculateMortgage = () => {
//     const principal = Number(loanAmount) - Number(downPayment);
//     const monthlyRate = Number(interestRate) / 100 / 12;
//     const totalMonths = Number(loanTerm) * 12;
//     const monthlyPayment =
//       (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
  
//     return (monthlyPayment + Number(propertyTax) / 12 + Number(hoaFees)).toFixed(2);
//   };
  

//   return (
//     <div className="max-w-2xl md:max-w-lg sm:max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg w-full">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Mortgage Calculator</h2>

//       {/* Loan Amount */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Loan Amount</label>
//         <Slider min={50000} max={1000000} value={loanAmount} onChange={setLoanAmount} trackStyle={{ backgroundColor: "#4F46E5" }} />
//         <p className="text-sm text-gray-600 mt-1">${loanAmount.toLocaleString()}</p>
//       </div>

//       {/* Down Payment */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Down Payment</label>
//         <Slider min={5000} max={500000} value={downPayment} onChange={setDownPayment} trackStyle={{ backgroundColor: "#4F46E5" }} />
//         <p className="text-sm text-gray-600 mt-1">${downPayment.toLocaleString()}</p>
//       </div>

//       {/* Interest Rate & Loan Term */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium">Interest Rate (%)</label>
//           <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="border p-2 w-full rounded-md" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Loan Term (Years)</label>
//           <select value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} className="border p-2 w-full rounded-md">
//             <option value="15">15 Years</option>
//             <option value="30">30 Years</option>
//           </select>
//         </div>
//       </div>

//       {/* Property Tax & HOA Fees */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         <div>
//           <label className="block text-sm font-medium">Property Tax (Annual)</label>
//           <input type="number" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} className="border p-2 w-full rounded-md" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">HOA Fees (Monthly)</label>
//           <input type="number" value={hoaFees} onChange={(e) => setHoaFees(e.target.value)} className="border p-2 w-full rounded-md" />
//         </div>
//       </div>

//       {/* Monthly Payment Display */}
//       <h3 className="text-xl font-semibold mt-6 text-center">
//         Estimated Monthly Payment: <span className="text-blue-600">${calculateMortgage()}</span>
//       </h3>
//     </div>
//   );
// };

// export default MortgageCalculator;/
"use client"; // Enable client-side rendering

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "next/image";
import Link from "next/link";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(265);
  const [hoaFees, setHoaFees] = useState(0);

  const calculateMortgage = () => {
    const principal = Number(loanAmount) - Number(downPayment);
    const monthlyRate = Number(interestRate) / 100 / 12;
    const totalMonths = Number(loanTerm) * 12;
    const monthlyPayment =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

    return (monthlyPayment + Number(propertyTax) / 12 + Number(hoaFees)).toFixed(2);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center px-4 md:px-10 lg:px-16">
        <h1 className="text-2xl font-bold text-blue-600">BetterHome</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>

        </div>

      </nav>

      {/* Mortgage Calculator Section */}
      <section className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Mortgage Calculator</h2>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Loan Amount</label>
          <Slider min={50000} max={1000000} value={loanAmount} onChange={setLoanAmount} trackStyle={{ backgroundColor: "#4F46E5" }} />
          <p className="text-sm text-gray-600 mt-1">${loanAmount.toLocaleString()}</p>
        </div>

        {/* Down Payment */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Down Payment</label>
          <Slider min={5000} max={500000} value={downPayment} onChange={setDownPayment} trackStyle={{ backgroundColor: "#4F46E5" }} />
          <p className="text-sm text-gray-600 mt-1">${downPayment.toLocaleString()}</p>
        </div>

        {/* Interest Rate & Loan Term */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Interest Rate (%)</label>
            <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="border p-2 w-full rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium">Loan Term (Years)</label>
            <select value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} className="border p-2 w-full rounded-md">
              <option value="15">15 Years</option>
              <option value="30">30 Years</option>
            </select>
          </div>
        </div>

        {/* Property Tax & HOA Fees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Property Tax (Annual)</label>
            <input type="number" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} className="border p-2 w-full rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium">HOA Fees (Monthly)</label>
            <input type="number" value={hoaFees} onChange={(e) => setHoaFees(e.target.value)} className="border p-2 w-full rounded-md" />
          </div>
        </div>

        {/* Monthly Payment Display */}
        <h3 className="text-xl font-semibold mt-6 text-center">
          Estimated Monthly Payment: <span className="text-blue-600">${calculateMortgage()}</span>
        </h3>
      </section>

      {/* Information Cards */}
      <section className="mt-12 px-6 md:px-10 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Understanding Mortgage Calculations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h3 className="text-lg font-semibold text-blue-600">Why Use a Mortgage Calculator?</h3>
            <p className="mt-2 text-gray-600">A mortgage calculator helps you estimate your monthly payments, allowing you to plan better before buying a home.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h3 className="text-lg font-semibold text-blue-600">Impact of Interest Rates</h3>
            <p className="mt-2 text-gray-600">Even a small change in interest rates can significantly affect your monthly mortgage payment and overall cost.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h3 className="text-lg font-semibold text-blue-600">Down Payment Considerations</h3>
            <p className="mt-2 text-gray-600">A larger down payment reduces your loan amount, which in turn lowers your monthly payments and interest paid over time.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h3 className="text-lg font-semibold text-blue-600">Property Taxes & Fees</h3>
            <p className="mt-2 text-gray-600">Your total payment includes property taxes and HOA fees, which vary based on location and property type.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h3 className="text-lg font-semibold text-blue-600">Fixed vs. Adjustable Rates</h3>
            <p className="mt-2 text-gray-600">Fixed-rate mortgages keep payments steady, while adjustable-rate mortgages (ARMs) may fluctuate over time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p>&copy; 2025 BetterHome. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MortgageCalculator;

