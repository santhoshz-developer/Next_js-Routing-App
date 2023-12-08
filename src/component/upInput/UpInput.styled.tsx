import { FormHelperText, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

export const InputStyled = styled(OutlinedInput)`
    border: 1px solid black,
    borderRadius: '0px',
    '& fieldset': {
        border: 'none'
    },
    input: {
        padding: '10px 14px'
    }

`
export const HelperText = styled(FormHelperText)`
    margin: 10px 0px 0px 0px;
`;
