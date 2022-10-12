import { useTheme } from 'next-themes';
import { GlobalStyles } from '@mui/material';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../../config/theme';
import { FC, useEffect, useState } from 'react';

const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);
  console.log('CURRENT-Theme', currentTheme.palette.mode);
  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
