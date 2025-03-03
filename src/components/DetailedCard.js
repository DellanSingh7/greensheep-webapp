import React from "react";

export default function DetailedCard() {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
            <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0280/2096/5428/products/ogkush_510x@2x.progressive.jpg?v=1605530745"
                alt="GSC"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex-1 px-4 py-16">
        <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
          Girl Scout Cookies
        </h2>
        <p class="text-gray-500 text-sm">
          By{" "}
          <a href="#" class="text-green-900 hover:underline">
            GreenSheep
          </a>
        </p>

        <div class="inline-flex">
          <div>
            <div class="rounded-lg bg-gray-100 flex py-2 px-3">
              <span class="text-green-900 mr-1 mt-1">R</span>
              <span class="font-bold text-green-900 text-3xl">120</span>
            </div>
          </div>
          <div class="flex-1">
            <span class="text-green-500 text-lg font-semibold">In-Stock</span>
          </div>
        </div>

        <p class="text-gray-500">
          GSC, also known as "Girl Scout Cookies," is an indica-dominant hybrid
          marijuana strain made by crossing OG Kush with Durban Poison. This
          popular strain is known for producing euphoric effects, followed up by
          waves of full-body relaxation. One hit of GSC will leave you feeling
          happy, hungry, and stress-free.
        </p>

        <div class="flex justify-evenly">
          <div class="relative">
            <div class="text-center left-0 pt-7 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
              Qty
            </div>

            <svg
              class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>

          <button
            type="button"
            class="h-14 px-6 py-2 font-semibold rounded-xl bg-green-800 hover:bg-green-900 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
