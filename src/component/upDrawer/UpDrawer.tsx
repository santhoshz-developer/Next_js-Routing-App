import React from "react";
import styled from "styled-components";
import { DrawerWrapper } from "./UpDrawer.styled";
import UpButton from "../upButton/UpButton";

interface DrawerProps {
  isOpen: boolean;
  children: string | React.ReactNode;
  onClose: () => void;
}

const UpDrawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <DrawerWrapper isOpen={isOpen}>
      <UpButton variant="contained" onClick={onClose}>Close Drawer</UpButton>
      {children}
    </DrawerWrapper>
  );
};

export default UpDrawer;
