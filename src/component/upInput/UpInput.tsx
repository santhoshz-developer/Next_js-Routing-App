import { FormControl } from "@mui/material";
import React, { FC } from "react";
import { HelperText, InputStyled } from "./UpInput.styled";

interface UpInputProps {
  id?: string;
  className?: string;
  placeholder?: string;
  fullWidth?: boolean;
  width?: number;
  variant?: "standard" | "outlined" | "filled";
  ariaName?: string;
  type?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onInputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  helperText?: any;
  label?: string;
}

const UpInput: FC<UpInputProps> = ({
  id = "input",
  className,
  placeholder = "Please Enter Here",
  fullWidth,
  width = 100,
  variant = "outlined",
  ariaName = "input",
  type = "text",
  startAdornment,
  endAdornment,
  onInputHandler,
  value,
  helperText,
  label,
}) => {
  const renderHelperText = () => {
    if (helperText) {
      return (
        <HelperText error id="outlined-weight-helper-text">
          {helperText}
        </HelperText>
      );
    }
  };

  return (
    <FormControl
      sx={{ width: `${fullWidth ? 100 : width}%` }}
      variant={variant}
      className={className}
    >
      <InputStyled
        id={id}
        label={label}
        placeholder={placeholder}
        type={type}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        aria-describedby={id}
        inputProps={{
          "aria-label": ariaName,
        }}
        value={value}
        onChange={onInputHandler}
      />
      {renderHelperText()}
    </FormControl>
  );
};

export default UpInput;
