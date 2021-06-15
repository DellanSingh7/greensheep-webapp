import React from "react";

export default function Login() {
  return (
    <div className="bg-white fixed w-full h-full z-10 flex flex-row py-16 justify-center">
      <div className="flex flex-col items-center justify-between px-8 bg-gray-200 w-80 h-80 my-12 mx-14 rounded-xl p-4 max-w-md">
        <form className="flex flex-col flex-1 justify-center items-center w-full h-24 gap-6 rounded-xl">
          <h1 className="text-xl py-2">Sign In</h1>
          <input
            className="rounded-xl px-6 py-2"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            className="rounded-xl px-6 py-2"
            type="password"
            name="password"
            placeholder="password"
          />
          <button className="text-lg bg-green-900 rounded-3xl px-10 py-2 hover:bg-green-500 m-4 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
