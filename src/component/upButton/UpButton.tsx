'use client';

import { PropsWithChildren } from 'react';
import { UpButtonProps } from './types';
import { Button } from '@mui/material';

const UpButton = ({ children, ...props }: PropsWithChildren<UpButtonProps>) => {
    return (
        <Button {...props} >
            {children}
        </Button>
    );
};

export default UpButton ;
