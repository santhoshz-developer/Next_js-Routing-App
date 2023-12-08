"use client";
import React, { useState } from "react";

import {
  CollapseContainer,
  CollapseContent,
  CollapseHeader,
} from "./UpCollapse.styled";

interface CollapseProps {
  title: string;
  children: any;
}

const UpCollapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapseContainer>
      <CollapseHeader onClick={toggleCollapse}>{title}</CollapseHeader>
      <CollapseContent isOpen={isOpen}>{children}</CollapseContent>
    </CollapseContainer>
  );
};

export default UpCollapse;
