import {ReactNode} from 'react';

export enum Theme {
  light = 'colorsOnWhite',
  Dark = 'colorsOnDark',
}

export interface ThemeProviderProps {
  theme?: {name: string};
  themeName?: 'light' | 'dark';
  children: ReactNode;
}
