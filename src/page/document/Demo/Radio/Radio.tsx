
import UpRadioButton from '@/component/upRadio/UpRadio';
import React from 'react';

const Radio: React.FC = () => {
  return (
    <div>
      <UpRadioButton label="Male" name="option" value="1" />
      <UpRadioButton label="Female" name="option" value="2" />
    </div>
  );
};

export default Radio;
