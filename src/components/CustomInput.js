import React from "react";

const CustomInput = ({ inputId, name, labelName }) => {
  return (
    <div className="custom-input">
      <label htmlFor={inputId}>{labelName} </label>
      <input name={name} id={inputId} />
    </div>
  );
};

export default CustomInput;
