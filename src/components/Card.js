import React from "react";

function Card() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex gap-4 items-center space-x-4 hover:bg-green-400 cursor-pointer">
      <div className="flex-shrink-0 rounded">
        <div className="bg-yellow-500 text-white h-14 w-14 rounded-full inline-block text-center pt-3 text-xl ">
          JT
        </div>
      </div>
      <div>
        <div className="text-xl font-medium font-baloo_tammudu_2">
          Jason Truter
        </div>
        <p className="sans">100 Harrison Drive, Glen Hills, Durban North</p>
      </div>
    </div>
  );
}

export default Card;
