"use client";
import UpLink from "@/component/upLink/UpLink";
import React from "react";
import { SideNavContainer } from "./SideBar.styled";

import Modal from "@/page/document/Modal/Model";

const SideNavBar = () => {
  return (
    <>
      <SideNavContainer>
        <UpLink href="/customer">Customer Details</UpLink>
      </SideNavContainer>
      <Modal />
    </>
  );
};

export default SideNavBar;
