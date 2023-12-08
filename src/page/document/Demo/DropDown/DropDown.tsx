
import UpDropdown from '@/component/upDropdown/UpDropdown';
import React, { useState } from 'react';


const Dropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const handleDropdownChange = (option: string | undefined) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <div>
      <UpDropdown options={['santhosh', 'Kalpana', 'sanjai']} onSelectChange={handleDropdownChange} />
    </div>
  );
};

export default Dropdown;
