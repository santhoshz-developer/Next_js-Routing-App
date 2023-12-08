import { Palette } from '@mui/material/styles';

import colors from './colors';

const palette: Palette = {
    common: {
        black: colors.common.black,
        white: colors.common.white
    },
    primary: {
        main: colors.primary.dark,
        contrastText: colors.primary.light,
        buttonState: {
            text: colors?.common['white'],
            main: colors?.primary['main'],
            hovered: colors?.secondary['main'],
            pressed: colors?.secondary['main'],
            focused: colors?.secondary['main'],
            disabled: colors?.text.disabled,
            disabledText: colors?.text['contrastText']
        }
    },
    secondary: {
        main: colors.secondary.dark,
        contrastText: colors.secondary.light
    },
    text: {
        primary: colors.text.main,
        secondary: colors.text.dark,
        disabled: colors.text.disabled
    },
    background: {
        default: colors.background.default,
        paper: colors.common.white
    },
    divider: colors.divider,

    success: {
        main: colors.success.main,
        dark: colors.success.dark,
        light: colors.success.light,
        contrastText: colors.common.white
    },
    warning: {
        main: colors.warning.main,
        dark: colors.warning.dark,
        light: colors.warning.light,
        contrastText: colors.common.white
    },
    error: {
        main: colors.error.main,
        dark: colors.error.dark,
        light: colors.error.light,
        contrastText: colors.common.white
    },
    info: {
        main: colors.info.main,
        dark: colors.info.dark,
        light: colors.info.light,
        contrastText: colors.common.white
    }
};

export default palette;
