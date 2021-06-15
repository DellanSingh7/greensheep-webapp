import React, { useState } from "react";
import Card from "../../components/Card";
import FloatingActionButton from "../../components/FloatingActionButton";
import SearchBar from "../../components/SearchBar";
import MemberDetails from "./MemberDetails";

export function Members() {
  // const [members, setMembers] = useState([]);

  const handleSearch = (searchedText) => {
    if (searchedText !== "") {
      alert("Please type something in...");
    } else {
      alert("You searched " + searchedText);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 py-5 gap-6 mt-20 pt-8">
      {/* <h1 className="text-lg">Club Members</h1> */}
      <SearchBar
        placeholderText="Search for a member"
        onSearch={handleSearch}
      />
      <div className="flex flex-col gap-2">
        <Card />
        <Card />
        <Card />
        {/* <MemberDetails /> */}
        <Card />
        <Card />
        <div className="m-0 fixed top-auto right-1/4 bottom-20 left-auto ">
          <FloatingActionButton />
        </div>
      </div>
    </div>
  );
}

export default Members;
