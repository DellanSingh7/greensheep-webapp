import React from "react";

const FormInput = (props) => <input {...props} className="" />;

export default function MemberDetails() {
  return (
    <form className="flex flex-col gap-4 bg-white">
      <FormInput type="text" placeholder="Name" />
      <FormInput type="text" placeholder="Surname" />
      <FormInput type="text" placeholder="Date of Birth" />
      <FormInput type="text" placeholder="Address" />
      <FormInput type="text" placeholder="Mobile" />
      <FormInput type="text" placeholder="Email" />
    </form>
  );
}
