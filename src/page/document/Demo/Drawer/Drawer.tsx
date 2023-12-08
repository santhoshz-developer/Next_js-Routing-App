import UpButton from '@/component/upButton/UpButton';
import UpDrawer from '@/component/upDrawer/UpDrawer';
import React, { useState } from 'react';


const Drawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <UpButton  variant='contained' onClick={handleToggleDrawer}>Open Drawer</UpButton>
      <UpDrawer isOpen={isDrawerOpen} onClose={handleToggleDrawer}>
        Hello santhosh
      </UpDrawer>
    </div>
  );
};

export default Drawer;
