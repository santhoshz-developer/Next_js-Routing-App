"use client";
import React, { useState, ReactNode } from 'react';
import { AccordionContainer, AccordionContent, AccordionHeader } from './UpAccordion.styled';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const UpAccordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const { title, children } = props;

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        {title}<span>{isOpen ? '▼  ' : '►'}</span>
      </AccordionHeader>
      <AccordionContent style={{ display: isOpen ? 'block' : 'none' }}>
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default UpAccordion;
