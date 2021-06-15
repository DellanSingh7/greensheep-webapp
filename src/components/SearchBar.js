import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ placeholderText, onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
    console.log(e.target.value);
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-row items-center justify-center p-2"
      onSubmit={handleSearch}
    >
      <input
        className="bg-gray-200 flex text-lg"
        placeholder={placeholderText}
      />
      <FaSearch />
    </form>
  );
}

export default SearchBar;
