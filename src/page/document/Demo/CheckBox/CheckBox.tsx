import UpCheckBox from '@/component/upCheckbox/UpCheckbox';
import React, { useState } from 'react';


const CheckBox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <UpCheckBox label="Agree" checked={isChecked} onChange={handleCheckBoxChange} />
    </div>
  );
};

export default CheckBox;
