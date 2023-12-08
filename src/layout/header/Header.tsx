"use client";
import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { AppBarStyled, LinkContainer } from "./Header.styled";
import UpLink from "@/component/upLink/UpLink";


const Header = () => {
  return (
    <>
      <AppBarStyled  position="static" >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NavBar
          </Typography>
          <LinkContainer>
            <UpLink href="/signIn">SignIn</UpLink>
            <UpLink href="/signUp">signUp</UpLink>
          </LinkContainer>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default Header;
