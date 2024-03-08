import React, { useState } from "react";
import "./inputForm.css";

function InputForm({ type, placeholder, value, setValue }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${isFocused ? "focus" : ""}`}>
      <label htmlFor={placeholder}>{placeholder}</label>
      <input
        className="w-full rounded-md border-none py-2 pl-2 shadow-md outline-none"
        type={type}
        name={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span>{placeholder}</span>
    </div>
  );
}

export default InputForm;
