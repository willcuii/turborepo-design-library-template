import React from 'react';
import {Global} from '@emotion/react';
import {ThemeProvider} from '@mui/material/styles';

import {globalStyles} from './ThemeProvider.styles';
import {ThemeLight} from '../../tokens/themes/ThemeLight';
import {ThemeDark} from '../../tokens/themes/ThemeDark';
import {ThemeProviderProps} from './ThemeProvider.type';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const THEMES = [ThemeLight, ThemeDark];

const BaseThemeProvider = ({
  theme,
  themeName,
  children,
}: ThemeProviderProps) => {
  const currentTheme = THEMES.find(
    (item) => item.palette.mode === (themeName || theme?.name),
  );

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <ThemeProvider theme={currentTheme || ThemeLight}>
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

BaseThemeProvider.displayName = 'ThemeProvider';
export default BaseThemeProvider;
