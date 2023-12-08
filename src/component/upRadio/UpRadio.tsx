
import React, { FC, InputHTMLAttributes } from 'react';
import { RadioContainer, StyledRadio } from './UpRadio.Styled';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const UpRadioButton: FC<RadioButtonProps> = ({ label, ...props }) => {
  return (
    <RadioContainer>
      <StyledRadio type="radio" {...props} />
      {label}
    </RadioContainer>
  );
};

export default UpRadioButton;
