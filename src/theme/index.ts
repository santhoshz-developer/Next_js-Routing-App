/* eslint-disable no-unused-vars */
import { Palette } from '@mui/material/styles';

export namespace FoundationTheme {

    export type CommonColors = {
        white: string;
        black: string;
    };


    export type PaletteColors =
        | 'primary'
        | 'neutral'
        | 'accentColorA'
        | 'accentColorB'
        | 'accentColorC'
        | 'accentColorD'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'error'
        | 'info';

    export type AppColors = PaletteColors | 'custom';

    export interface ButtonState {
        hovered?: string;
        hoveredText?: string;
        pressed?: string;
        pressedText?: string;
        focused?: string;
        focusedText?: string;
        disabled?: string;
        disabledText?: string;
    }

    export type PaletteColorType = {
        main: string;
        contrastText: string;
        buttonState?: ButtonState;
    };


    export type Theme = {
        palette?: Palette;
    };
}
