import UpButton from '@/component/upButton/UpButton';
import UpModal from '@/component/upModal/UpModal';
import React, { useState } from 'react';


const Model: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <UpButton variant='outlined' onClick={openModal}>Open Modal</UpButton>
      <UpModal isOpen={modalOpen} onClose={closeModal}>
        <h2>Model</h2>
        <p>santhosh....</p>
        <UpButton onClick={closeModal}>Close Modal</UpButton>
      </UpModal>
    </div>
  );
};

export default Model;
