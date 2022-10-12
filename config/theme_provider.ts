import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@importantimport/material-color-utilities';
import { responsiveFontSizes, createTheme } from '@mui/material';

const dynamicTheme = themeFromSourceColor(argbFromHex('#71A289'));

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

export default responsiveFontSizes(generateTheme(true));
