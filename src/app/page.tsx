"use client";

import HomePage from "@/page/homepage/HomePage";
import SignInForm from "./(auth)/signIn/page";
import SignupForm from "./(auth)/signUp/page";


function Mainpage() {
  return (
    <>
      <SignInForm/>
      <SignupForm/>
      <HomePage/>
    </>
  );
}

export default Mainpage;
