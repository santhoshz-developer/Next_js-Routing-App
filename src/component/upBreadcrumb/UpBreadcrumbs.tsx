"use client";

import React from 'react';
import { BreadcrumbItem, BreadcrumbsContainer } from './UpBreadcrumbs.styled';


interface BreadcrumbsProps {
  items: { label: string; link: string }[];
}
const UpBreadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <BreadcrumbsContainer>
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          <a href={item.link}>{item.label}</a>
        </BreadcrumbItem>
      ))}
    </BreadcrumbsContainer>
  );
};

export default UpBreadcrumbs;
