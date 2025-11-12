import React from "react";

export default function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Header (Nigerian Flag colors) */}
      <div className="h-24 bg-gradient-to-r from-green-600 via-white to-green-600"></div>

      {/* Avatar */}
      <div className="flex justify-center -mt-12">
        <div className="w-24 h-24 bg-gray-200 border-4 border-white rounded-full shadow-md flex items-center justify-center">
          {/* You can place your image here */}
          <span className="text-gray-500">Avatar</span>
        </div>
      </div>

      {/* Name, Title & Location */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Boluwatife Gbadamosi</h2>
        <p className="text-sm text-gray-500">Nutritionist & Data Enthusiast</p>
        <p className="text-sm text-gray-400 mt-1"> Lagos, Nigeria</p>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around mt-5 px-4">
        <div className="text-center">
          <p className="text-lg font-bold text-gray-800">1.2k</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="text-center border-x border-gray-200 px-4">
          <p className="text-lg font-bold text-gray-800">245</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-800">3.4k</p>
          <p className="text-sm text-gray-500">Likes</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="px-6 mt-5 text-center">
        <p className="text-gray-600 text-sm">
          Passionate about promoting healthy living through nutrition, education, and data-driven insights.
        </p>
      </div>

      {/* Follow Button */}
      <div className="flex justify-center mt-6 mb-6">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition">
          Follow
        </button>
      </div>
    </div>
  );
}
