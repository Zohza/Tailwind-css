import React from "react";

export default function ProfileCard() {
  return (
    <div className="h-160 mx-auto w-158 rounded-2xl flex-column items-center justify-center shadow-lg ">
        <header className="h-45 border-2 p-4 bg-gradient-to-r from-green-600 via-white to-green-600 border-none rounded-tl-lg rounded-tr-lg" ></header>


      <div className="flex justify-center -mt-12">
          <div className="w-32 h-32 by-gray-300 rounded-full border-5 border-white mx-auto bg-gray-200 flex items-center justify-center"></div>
      </div>


      {/* content */}
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-bold text-green-800">Boluwatife Gbadamosi</h2>
        <p className="text-1xl font-medium text-gray-500">AI developer | Nutritionist </p>
        <p className="text-1xl font-medium text-gray-500">Lagos, Nigeria. NG</p>
      </div>

<div className="flex justify-around mt-5 px-4  h-20">
    <p className="border-r-2 border-gray-500 gap-20 font-bold text-2xl p-4 ">24k <span className="text-gray-500 text-lg">followers</span></p>
    <p className="border-r-2 border-gray-500 gap-20 font-bold text-2xl p-4">1.4k <span className="text-gray-500 text-lg">following</span></p>
    <p className=" border-gray-500 gap-20 font-bold text-2xl p-4">2.7k <span className="text-gray-500 text-lg">followers</span></p>
    

</div>

      <div className="mx-auto w-140">
        <p>Nutrition Expert and an Aspiring AI developer, passionate about healthy living and building AI tools for Research...</p>
      </div>
      <div className="flex  w-32  mx-auto p-4 justify-center align-center bg-green-500 rounded-full mt-6"><button>Follow</button></div>
    </div>
  );
}
