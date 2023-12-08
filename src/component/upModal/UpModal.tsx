import React, { FC, ReactNode } from 'react';
import { ModalOverlay, ModalContent } from './UpModel.styled';

interface ModalProps {
  isOpen: boolean;
  children:ReactNode;
  onClose: () => void;
}


const UpModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default UpModal;
