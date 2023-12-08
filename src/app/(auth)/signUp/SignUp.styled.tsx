import theme from "@/theme/colorProviders";
import { Button, Container, FormControl, TextField } from "@mui/material";
import styled from "styled-components";

export const TextFieldStyled = styled(TextField)`
  width: 400px;
`;

export const FormControlStyled = styled(FormControl)`
  width: 400px;
`;

export const FormContainer = styled(Container)`
  border: 1px solid black;
  padding: 20px;
  width: 450px;
  border-radius: 20px;
  margin-top: 90px;
`;

export const SignUpButton = styled(Button)`
  background-color: ${theme.palette.warning.dark};
`;
