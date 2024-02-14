import {createTheme} from '@mui/material/styles';
import {
  backgroundColors,
  interactiveColors,
  textColors,
  borderColors,
  iconColors,
} from '../colors/colorsOnDark';
import {fonts} from '../fonts/fonts';
import {neutralColors} from '../colors/colorPalette';

//https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette.primary
export const ColorsDark = {
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
};

export const ThemeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: interactiveColors.primary,
    },
    secondary: {
      main: interactiveColors.secondary,
    },
    error: {
      main: textColors.textError,
    },
    warning: {
      main: textColors.textWarning,
    },
    info: {
      main: textColors.textInfo,
    },
    success: {
      main: textColors.textSuccess,
    },
    text: {
      primary: textColors.textDefault,
      secondary: textColors.textInactive,
      disabled: textColors.textDisabled,
    },
    background: {
      default: backgroundColors.bgBase,
      paper: backgroundColors.bgBase,
    },
    action: {
      active: interactiveColors.onFocusOverlay,
    },
    grey: {
      50: neutralColors['system-n-50'],
      100: neutralColors['system-n-100'],
      200: neutralColors['system-n-200'],
      300: neutralColors['system-n-300'],
      400: neutralColors['system-n-400'],
      500: neutralColors['system-n-500'],
      600: neutralColors['system-n-600'],
      700: neutralColors['system-n-700'],
      800: neutralColors['system-n-800'],
      900: neutralColors['system-n-900'],
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: fonts.type.primary,
    h1: {
      fontFamily: fonts.type.heading,
      fontSize: fonts.size.h1,
      fontWeight: 700,
      marginBottom: '24px',
    },
    h2: {
      fontFamily: fonts.type.heading,
      fontSize: fonts.size.h2,
      fontWeight: 700,
      marginBottom: '16px',
    },
    h3: {
      fontFamily: fonts.type.heading,
      fontSize: fonts.size.h3,
      fontWeight: 700,
      marginBottom: '12px',
    },
    h4: {
      fontFamily: fonts.type.heading,
      fontSize: fonts.size.h4,
      fontWeight: 700,
      marginBottom: '8px',
    },
    h5: {
      fontFamily: fonts.type.heading,
      fontSize: fonts.size.h5,
      fontWeight: 700,
      marginBottom: '8px',
    },
    h6: {
      fontFamily: fonts.type.heading,
      fontSize: fonts.size.h6,
      fontWeight: 700,
    },
    body1: {
      fontFamily: fonts.type.primary,
      fontSize: fonts.size.text,
    },
    body2: {
      fontFamily: fonts.type.primary,
    },
    button: {
      fontFamily: fonts.type.primary,
      textTransform: 'none',
    },
  },
});
