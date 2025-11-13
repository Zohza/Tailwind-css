import React from "react";

const ColorPalette = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <p className="flex align-center justify-center text-3xl  font-bold p-4 text-green-800">
        My Color Pallete
      </p>
      <div className="shadow-lg flex-column align-center justify-center h-150  mx-auto bg-gray-50 rounded-2xl ">
        <div className="shadow-lg flex align-center justify-center h-40  bg-gray-50 rounded-2xl w-88 m-auto">
          <div
            className="h-30 bg-green-500 w-30 flex
          align-center justify-center mt-10"
          ></div>
          <div
            className="h-30 bg-white-500 w-30 flex
          align-center justify-center mt-10"
          ></div>{" "}
          <div
            className="h-30 bg-green-500 w-30 flex
          align-center justify-center mt-10"
          ></div>
        </div>
        <p className="flex align-center justify-center py-4 font-bold text-gray-600">
          Color of the Nigerian Flag
        </p>
           <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
     
     <div>
         <div className="h-30 rounded-2xl bg-green-950 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex:#032e15 </p>
        <p className="w-32 mx-auto">rgb(3,46,21) </p>
     </div>

     
     <div>
         <div className="h-30 rounded-2xl bg-green-900 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex: #0d542b</p>
        <p className="w-32 mx-auto"> rgb(13,84,43)</p>
     </div>
     
     <div>
         <div className="h-30 rounded-2xl bg-green-800 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex:#016630 </p>
        <p className="w-32 mx-auto"> rgb(1,102,48)</p>
     </div>
     
     <div>
         <div className="h-30 rounded-2xl bg-green-700 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex: #008236</p>
        <p className="w-32 mx-auto"> rgb(0,130,54)</p>
     </div>
     
     <div>
         <div className="h-30 rounded-2xl bg-green-600 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex: #00a63e</p>
        <p className="w-32 mx-auto"> rgb(0,166,62)</p>
     </div>
     
     <div>
         <div className="h-30 rounded-2xl bg-green-500 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex:#00c951 </p>
        <p className="w-32 mx-auto"> rgb(0,201,81)</p>
     </div>
     
 
     <div>
         <div className="h-30 rounded-2xl bg-green-400 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex:#05df72 </p>
        <p className="w-32 mx-auto">rgb(5,223,114)</p>
     </div>
      
     <div>
         <div className="h-30 rounded-2xl bg-green-300 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex: #7bf1a8</p>
        <p className="w-32 mx-auto"> rgb(123,241,168)</p>
     </div>
      
     <div>
         <div className="h-30 rounded-2xl bg-green-200 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex: #b9f8cf</p>
        <p className="w-32 mx-auto">rgb(185,248,207)</p>
     </div>
     
      
     <div>
         <div className="h-30 rounded-2xl bg-green-100 p-4 text-white w-50 mx-auto"></div>
        <p className="w-32 mx-auto">Hex: #dbfce7</p>
        <p className="w-32 mx-auto">rgb(219,252,231) </p>
     </div>

      </div>
      </div>
    </div>
  );
};

export default ColorPalette;
