import { Accordion, styled } from '@mui/material';


export const AccordionStyled = styled(Accordion)`
    width: '100%';
    height: auto;
    box-shadow: none;
    border-bottom: 1px solid black;
    border-radius: 0 ;
    margin-bottom: 10px;
    &:before {
        display: none;
    }
`;
