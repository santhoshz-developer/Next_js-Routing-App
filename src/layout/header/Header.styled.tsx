import appBarTheme from "@/theme/component/AppBar";
import { AppBar } from "@mui/material";
import styled from "styled-components";

export const LinkContainer = styled.div`
  > *:not(:last-child) {
    margin-right: 8px;
  }
`;
export const AppBarStyled = styled(AppBar)`
  background-color: ${appBarTheme.palette.primary.main};
`;
