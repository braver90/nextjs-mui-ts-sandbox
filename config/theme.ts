import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@importantimport/material-color-utilities';
import { responsiveFontSizes, createTheme } from '@mui/material';

const seed = '#FF5A0F';
const dynamicTheme = themeFromSourceColor(argbFromHex(seed));

const { dark, light } = dynamicTheme.schemes;

const baseLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: hexFromArgb(light.primary),
    },
    background: {
      default: hexFromArgb(light.background),
      paper: hexFromArgb(light.primaryContainer),
    },
    secondary: {
      main: hexFromArgb(light.secondary),
    },
  },
});

const baseDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: hexFromArgb(dark.primary),
    },
    background: {
      default: hexFromArgb(dark.background),
      paper: hexFromArgb(dark.primaryContainer),
    },
    secondary: {
      main: hexFromArgb(dark.secondary),
    },
  },
});
export const primary = seed;
export const lightTheme = responsiveFontSizes(baseLightTheme);
export const darkTheme = responsiveFontSizes(baseDarkTheme);
