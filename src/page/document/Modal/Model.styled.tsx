import UpButton from "@/component/upButton/UpButton";
import UpModal from "@/component/upModal/UpModal";
import { TextField } from "@mui/material";
import styled from "styled-components";

export const ButtonStyled = styled(UpButton)`

  position: relative;
  bottom: 770px;
  left:300px

`;

export const FormStyled = styled("form")`
  padding: 100px;
`;

export const ModelStyled = styled(UpModal)`
  width: 50%;
`;
export const CloseButtonStyled = styled(UpButton)`
  position: relative;
  bottom: 15px;
  left: 240px;
  background-color: red;
  &:hover {
    background-color: red;
  }
`;
export const InputTextStyled = styled(TextField)`
  width: 400px;
`;
