import React, { useEffect } from "react";

const Checkbox = ({ isChecked = false, title }) => {
  const handleToggle = () => {
    isChecked = !isChecked;
  };

  useEffect(() => {
    console.log({ isChecked });
  });
  return (
    <label className="capitalize inline cursor-pointer">
      <input
        type="checkbox"
        className="mr-4"
        value={isChecked}
        // onClick={() => toggleIsChecked()}
        // onChange={() => toggleIsChecked()}
      />
      <span>{title}</span>
    </label>
  );
};

export default Checkbox;
