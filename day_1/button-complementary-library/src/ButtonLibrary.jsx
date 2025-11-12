import React from "react";

export default function ButtonLibrary() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 bg-gray-50 min-h-screen">
      {/* Primary Button */}
      <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">
        Primary
      </button>

      {/* Secondary Button */}
      <button className="bg-white text-green-600 border border-green-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-50 transition">
        Secondary
      </button>

      {/* Danger Button */}
      <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-700 transition">
        Danger
      </button>

      {/* Success Button */}
      <button className="bg-emerald-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-emerald-600 transition">
        Success
      </button>

      {/* Large Button */}
      <button className="bg-green-600 text-white font-semibold px-8 py-3 text-lg rounded-xl shadow hover:bg-green-700 transition">
        Large
      </button>

      {/* Small Button */}
      <button className="bg-green-600 text-white font-medium px-4 py-1 text-sm rounded-md shadow hover:bg-green-700 transition">
        Small
      </button>
    </div>
  );
}
