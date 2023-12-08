
import React from 'react';
import { DropdownWrapper, Select } from './UpDropdown.styled';

interface DropdownProps {
  options: string[];
  onSelectChange: (selectedOption: string | undefined) => void;
}

const UpDropdown: React.FC<DropdownProps> = ({ options, onSelectChange }) => {
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onSelectChange(selectedOption || undefined);
  };

  return (
    <DropdownWrapper>
      <Select onChange={handleDropdownChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </DropdownWrapper>
  );
};

export default UpDropdown;
