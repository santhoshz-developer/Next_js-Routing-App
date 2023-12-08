import React, { ChangeEvent } from "react";
import { CheckBoxContainer, CheckBoxInput } from "./UpCheckbox.styled";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const UpCheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <CheckBoxContainer>
      <CheckBoxInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </CheckBoxContainer>
  );
};

export default UpCheckBox;
