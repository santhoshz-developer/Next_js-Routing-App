/* eslint-disable no-unused-vars */

import '@mui/material/styles';
import '@mui/material/Typography';
import '@mui/material/Button';
import { CSSProperties } from 'react';

import { FoundationTheme } from './themes';
import {
    Palette,
    PaletteColorOptions,
    CommonColors,
    PaletteTonalOffset,
    TypeText,
    TypeDivider,
    TypeAction,
    TypeBackground,
    PaletteAugmentColorOptions
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
    interface Theme {
        config?: FoundationTheme.ThemeConfig;
    }

    interface PaletteColor {
        dark?: PaletteOptions;
        light?: PaletteOptions;
        main: PaletteOptions;
        buttonState?: FoundationTheme.ButtonState;
    }

    // eslint-disable-next-line no-shadow
    interface Palette {
        primary: PaletteColor;
        neutral?: PaletteColor;
        secondary?: PaletteColor;
        accentColorA?: PaletteColor;
        accentColorB?: PaletteColor;
        accentColorC?: PaletteColor;
        accentColorD?: PaletteColor;
        accentColorE?: PaletteColor;
        accentColorF?: PaletteColor;
        success?: PaletteColor;
        warning?: PaletteColor;
        error?: PaletteColor;
        info?: PaletteColor;
        contrastThreshold?: number;
        tonalOffset?: number;
        common?: CommonColors;
        mode?: FoundationTheme.Theme;
        contrastThreshold?: number;
        tonalOffset?: PaletteTonalOffset;
        grey?: PaletteColor;
        text?: TypeText;
        divider?: TypeDivider;
        action?: TypeAction;
        background?: TypeBackground;
        getContrastText?: (background: string) => string;
        augmentColor?: (options: PaletteAugmentColorOptions) => PaletteColor;
    }

    interface PaletteOptions {
        neutral?: PaletteColor;
        secondary?: PaletteColor;
        accentColorA?: PaletteColor;
        accentColorB?: PaletteColor;
        accentColorC?: PaletteColor;
        accentColorD?: PaletteColor;
        accentColorE?: PaletteColor;
        accentColorF?: PaletteColor;
        success?: PaletteColor;
        warning?: PaletteColor;
        error?: PaletteColor;
        info?: PaletteColor;
    }
}
