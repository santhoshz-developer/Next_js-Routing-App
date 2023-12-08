import styled from 'styled-components';

export const BreadcrumbsContainer = styled.nav`
  margin: 10px 0;
  font-size: 16px;
`;

export const BreadcrumbItem = styled.span`
  margin-right: 5px;
  &:not(:last-child):after {
    content: '>';
    margin-left: 5px;
  }
`;
