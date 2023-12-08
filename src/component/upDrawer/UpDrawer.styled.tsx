import styled from "styled-components";

export const DrawerWrapper = styled.div<{ isOpen: boolean }>`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  background-color: #155724;
  transition: right 0.3s ease-in-out;
`;
