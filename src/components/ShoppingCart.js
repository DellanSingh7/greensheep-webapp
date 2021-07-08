import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Bin from "../components/Bin";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function shoppingCart() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            {/* Shopping Cart Icon */}
            <Menu.Button className="inline-flex justify-center w-full rounded -md border border-green-900 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">
              <svg
                class="h-5 w-5 text-green-900"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="flex flex-col py-1">
                {/* Item 1 */}
                <Menu.Item className="inline-flex">
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      <div class="inline-flex ">
                        <img
                          src="https://images.dailyhive.com/20180313163601/Girlscout.jpg"
                          alt="GSC"
                        />
                      </div>
                      <div class="flex-auto text-sm w-32">
                        <div class="font-bold">Product 1</div>
                        <div class="truncate">Product 1 description</div>
                        <div class="text-gray-400">Qt: 2</div>
                      </div>
                      <div class="flex flex-col w-18 font-medium items-end">
                        <Bin />
                        R100
                      </div>
                    </div>
                  )}
                </Menu.Item>
                {/* Item 2 */}
                <Menu.Item className="inline-flex">
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      <div class="inline-flex ">
                        <img
                          src="https://images.dailyhive.com/20180313163601/Girlscout.jpg"
                          alt="GSC"
                        />
                      </div>
                      <div class="flex-auto text-sm w-32">
                        <div class="font-bold">Product 2</div>
                        <div class="truncate">Product 2 description</div>
                        <div class="text-gray-400">Qt: 2</div>
                      </div>
                      <div class="flex flex-col w-18 font-medium items-end">
                        <Bin />
                        R350
                      </div>
                    </div>
                  )}
                </Menu.Item>
                {/* Checkout Button */}
                <Menu.Item className="inline-flex justify-items-center">
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      <div class="px-10 py-2">
                        <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-green-900 hover:text-white bg-white text-green-900 border duration-200 ease-in-out border-green-900 transition">
                          Checkout R450
                        </button>
                      </div>
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
