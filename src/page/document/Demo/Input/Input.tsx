
import UpInput from "@/component/upInput/UpInput";
import React from "react";

const Input: React.FC = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input changed:", e.target.value);
  };

  return (
    <div>
      <form>
        <UpInput
          id="custom-input"
          placeholder="Enter text"
          fullWidth
          onInputHandler={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Input;
