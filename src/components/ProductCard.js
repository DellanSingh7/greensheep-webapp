import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div class="w-auto max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <img src={product.imgURL} alt="Img" />
      <div class="flex items-end justify-end w-full bg-cover">
        <button class="p-2  rounded-full bg-green-700 text-white mx-5 -mb-4 mt-3 hover:bg-green-800 focus:outline-none focus:bg-green-800">
          <FaCartPlus></FaCartPlus>
        </button>
      </div>
      <div class="px-5 py-3">
        <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
          {product.name}
        </h2>
        <p class="text-gray-500 text-sm">
          By{" "}
          <a href="#" class="text-green-900 hover:underline">
            GreenSheep
          </a>
        </p>

        <div class="inline-flex">
          <div>
            <div class="rounded-lg bg-gray-100 flex py-2">
              <span class="font-bold text-green-900 text-3xl">
                {product.price}
              </span>
            </div>
          </div>
          <div class="flex-1">
            <span class="text-green-500 text-lg font-semibold px-6">
              In-Stock
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
