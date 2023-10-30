import React from "react";

const CheckBox = ({ label }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        className="w-4 h-4 text-[#4FFEF3] bg-[#4FFEF3] border-gray-200 rounded focus:ring-[#4FFEF3] ] "
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-base md:text-lg font-medium text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
