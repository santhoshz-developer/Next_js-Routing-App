// Import necessary modules and components
import React, { useCallback } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import UpButton from "@/component/upButton/UpButton";
import FormInput from "@/component/forms/input";

import { useSaveSignIn } from "@/hooks/useAddData";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { handleSubmit, formState, control } =
    useForm<FormValues>({
      defaultValues: {
        email: "",
        password: "",
      },
    });

  const { errors } = formState;

  const { mutate } = useSaveSignIn();

  const handleSignIn = (payload: any) => {
    mutate(payload);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(handleSignIn)} noValidate>
        <Stack spacing={2} width={400}>
          <label>Email</label>
          <FormInput
            placeholder="Enter the Email"
            name="email"
            control={control}
            rules={{
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid Email ID",
              },
              required: {
                value: true,
                message: "Enter the Email",
              },
            }}
            errorText={errors?.email?.message}
          />
          <label>Password</label>
          <FormInput
            placeholder="Enter the Password"
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Enter the Password",
              },
            }}
            errorText={errors?.password?.message}
          />

          <UpButton type="submit" variant="contained" color="primary">
            Sign In
          </UpButton>
        </Stack>
      </form>
      <DevTool control={control} />
    </Container>
  );
};

export default SignIn;
