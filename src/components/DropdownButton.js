import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  return (
    <Menu as="div" className="bg-fixed inline-block text-left ">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-green-700 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">
              Category
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
              className="absolute origin-top-right mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 hover:bg-green-700 hover:text-white text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Smokables
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 hover:bg-green-700 hover:text-white text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      The Sweet Tooth
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 hover:bg-green-700 hover:text-white text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      The Savoury Box
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 hover:bg-green-700 hover:text-white text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      The Infused Kettle
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 hover:bg-green-700 hover:text-white text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Medicinal Range
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
