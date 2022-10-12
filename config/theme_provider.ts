import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@importantimport/material-color-utilities';
import { responsiveFontSizes, createTheme } from '@mui/material';

const dynamicTheme = themeFromSourceColor(argbFromHex('#c242f5'));

const generateTheme = (isDarkMode: boolean) => {
  const currentScheme = isDarkMode
    ? dynamicTheme.schemes.dark
    : dynamicTheme.schemes.light;

  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: hexFromArgb(currentScheme.primary),
      },
      background: {
        default: hexFromArgb(currentScheme.background),
        paper: hexFromArgb(currentScheme.primaryContainer),
      },
      secondary: {
        main: hexFromArgb(currentScheme.secondary),
      },
    },
  });
};

const getTheme = (prefersDarkMode: boolean) => {
  return responsiveFontSizes(generateTheme(true));
};
export default getTheme;
