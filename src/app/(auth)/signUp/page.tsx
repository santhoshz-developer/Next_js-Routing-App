"use client";
import React, { useState } from "react";
import {
  Stack,
  Container,

} from "@mui/material";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { SignUpButton } from "./SignUp.styled";
import FormInput from "@/component/forms/input";
import UpCheckBox from "@/component/upCheckbox/UpCheckbox";
import { useSignUpData } from "@/hooks/useAddData";

type FormValues = {
  name: string;
  email: string;
  password: string;
  phoneNumber: Number;
  agree: boolean;
};

const SignupForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      agree: false,
    },
  });

  const {  handleSubmit, formState, control } = form;
  const { errors } = formState;

  
  const { mutate: addData } = useSignUpData();

  const onSubmit = (data: FormValues) => {
    addData(data);
    alert("SignUp SuccussFully :)");
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Container maxWidth="sm">
        <h1>Sign UP</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2} width={400}>
          <label>Name</label>
            <FormInput
            placeholder="Enter the Name"
              name="name"
              control={control}
              rules={{
                pattern: {
                  message: "Please enter the valid Name",
                },
                required: {
                  value: true,
                  message: "Enter the Name",
                },
              }}
              errorText={errors?.name?.message}
            />
            <label>Email</label>
            <FormInput
            placeholder="Enter the Email"
              name="email"
              control={control}
              rules={{
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter the valid Email ID",
                },
                required: {
                  value: true,
                  message: "Enter the Email",
                },
              }}
              errorText={errors?.email?.message}
            />
            <label>Create Password</label>
            <FormInput
            placeholder="Enter the Password"
              name="password"
              control={control}
              rules={{
                pattern: {
                  message: "Please enter the valid password",
                },
                required: {
                  value: true,
                  message: "Enter the password",
                },
              }}
              errorText={errors?.password?.message}
            />
            <label>Phone Number</label>
            <FormInput
            placeholder="Enter the Phone Number"
              name="phoneNumber"
              control={control}
              rules={{
                pattern: {
                  message: "Please enter the valid phoneNumber",
                },
                required: {
                  value: true,
                  message: "Enter the phoneNumber",
                },
              }}
              errorText={errors?.phoneNumber?.message}
            />
           <UpCheckBox label="Agree" checked={isChecked} onChange={handleCheckBoxChange} />
            <SignUpButton type="submit" variant="contained" color="primary">
              Sign Up
            </SignUpButton>
          </Stack>
        </form>
        <DevTool control={control} />
      </Container>
    </>
  );
};

export default SignupForm;
