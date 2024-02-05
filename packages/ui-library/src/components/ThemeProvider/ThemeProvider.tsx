import React from 'react';
import {ThemeProvider} from 'styled-components';

import {GlobalStyle} from './ThemeProvider.styles';
import {ThemeLight} from '../../tokens/themes/ThemeLight';
import {ThemeDark} from '../../tokens/themes/ThemeDark';
import {ThemeProviderProps} from './ThemeProvider.type';

const THEMES = [ThemeLight, ThemeDark];

const BaseThemeProvider = ({
  theme,
  themeName,
  children,
}: ThemeProviderProps) => {
  const currentTheme = THEMES.find(
    (item) => item.name === (themeName || theme?.name),
  );

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme || ThemeLight}>
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

BaseThemeProvider.displayName = 'ThemeProvider';
export default BaseThemeProvider;
