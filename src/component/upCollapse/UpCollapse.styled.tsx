import styled from "styled-components";

export const CollapseContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;

`;

export const CollapseHeader = styled.div`
  cursor: pointer;
  font-weight: bold;
`;

export const CollapseContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;
