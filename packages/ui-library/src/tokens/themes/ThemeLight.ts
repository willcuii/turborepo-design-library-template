import {
  backgroundColors,
  borderColors,
  iconColors,
  interactiveColors,
  textColors,
} from '../colors/colorsOnWhite';
import {spacings} from '../spacing/spacings';

export const ThemeLight = {
  name: 'themeLight',
  colors: {
    interactive: {
      ...interactiveColors,
    },
    text: {
      ...textColors,
    },
    background: {
      ...backgroundColors,
    },
    border: {
      ...borderColors,
    },
    icon: {
      ...iconColors,
    },
  },
  fonts: ['sans-serif', 'Lato'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  spacings: {
    ...spacings,
  },
};
