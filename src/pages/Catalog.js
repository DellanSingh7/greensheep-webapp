import React from "react";
import Dropdown from "../components/DropdownButton";
import ProductCard from "../components/ProductCard";
import ArrowDrpDwn from "../components/ArrowDropdown";
import ShoppingCart from "../components/ShoppingCart";

export default function Catalog() {
  const products = [
    {
      name: "Grand Daddy Purple",
      price: "R180/gram",
      imgURL:
        "https://cdn.shopify.com/s/files/1/0280/2096/5428/products/ogkush_510x@2x.progressive.jpg?v=1605530745",
      desciption:
        "Granddaddy Purple (or GDP) is a famous indica cross of Mendo Purps, Skunk, and Afghanistan. This California staple inherits a complex grape and berry aroma from its Mendo Purps and Afghanistan parent, while Skunk passes on its oversized, compact bud structure.",
    },
    // {
    //   name: "OG Kush",
    //   price: "R200/gram",
    //   imgURL: "https://images.leafly.com/flower-images/og-kush.png",
    // },
    // {
    //   name: "Creamsicle",
    //   price: "R230/gram",
    //   imgURL:
    //     "https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fproducts%2Fphotos%2FtSmmyFoxRYGHGbIDl0w7_DSC_0057.JPG?ixlib=rails-4.0.0&w=490&h=&fit=crop&bg=FFFFFF&fm=jpg&q=80&s=e8f66d9a992218155af6b028d73c30e7",
    // },
    // {
    //   name: "White Grape Stomper ",
    //   price: "R150/gram",
    //   imgURL:
    //     "https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fproducts%2Fphotos%2FSsVY5DAaT5GQ0SsZa265_White+Grape+Stomper_01_full+bud.jpg?ixlib=rails-4.0.0&w=490&h=&fit=crop&bg=FFFFFF&fm=jpg&q=80&s=920332d7063f4d3a54ce3a6f188b7fcd",
    // },
    // {
    //   name: "Fire Breath ",
    //   price: "R80/gram",
    //   imgURL:
    //     "https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fproducts%2Fphotos%2F15ZvYnLQt2iyzPWqJ0ek_COTC_Nug+gold+Dust+Fire+Breath.jpg?ixlib=rails-4.0.0&w=490&h=&fit=crop&bg=FFFFFF&fm=jpg&q=80&s=e086396754764ee8257e48012c930088",
    // },
  ];
  return (
    <div class="container mx-auto px-1 py-2 ">
      <div className="w-full inline-flex justify-between">
        <Dropdown />
        <ShoppingCart />
      </div>
      <div class="w-full text-gray-900 text-center text-5xl font-extrabold font-baloo_tammudu_2 py-6">
        Smokables
      </div>
      <ArrowDrpDwn />
      <div class="flex items-center justify-between">
        <main className="my-8">
          <div class="container mx-auto px-6">
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {products.map((product) => {
                return <ProductCard product={product} />;
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
