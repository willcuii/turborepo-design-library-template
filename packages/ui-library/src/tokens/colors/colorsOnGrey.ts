import {neutralColors, secondaryColors, systemColors} from './colorPalette';
import {
  interactiveColors as interactiveColorsOnWhite,
  textColors as textColorsOnWhite,
  backgroundColors as backgroundColorsOnWhite,
  borderColors as borderColorsOnWhite,
  iconColors as iconColorsOnWhite,
} from './colorsOnWhite';

export const interactiveColors = {
  ...interactiveColorsOnWhite,
  secondaryContainer: neutralColors['system-n-150'],
};

export const textColors = {
  ...textColorsOnWhite,
  textDefault: neutralColors['system-n-900'],
  textInactive: neutralColors['system-n-700'],
  textDisabled: neutralColors['system-n-300'],
};

export const backgroundColors = {
  ...backgroundColorsOnWhite,
  bgBase: neutralColors['system-n-50'],
  bgOnBaseInset: neutralColors['system-n-100'],
  bgInputDefault: neutralColors['system-n-100'],
  bgInputHover: neutralColors['system-n-150'],
  bgInputFocused: neutralColors['system-n-100'],
  bgInputDisabled: neutralColors['system-n-150'],
};

export const borderColors = {
  ...borderColorsOnWhite,
  borderDefault: neutralColors['system-n-400'],
  borderHover: neutralColors['system-n-600'],
  borderFocus: secondaryColors['secondary-g-600'],
  borderDisabled: neutralColors['system-n-300'],

  borderDividerStrong: neutralColors['system-n-400'],
  borderDividerLight: neutralColors['system-n-200'],

  borderInfo: secondaryColors['secondary-b-600'],
  borderSuccess: secondaryColors['secondary-g-700'],
  borderWarning: systemColors['system-o-600'],

  borderButtonDefault: neutralColors['system-n-200'],
  borderButtonDisabled: neutralColors['system-n-100'],
};

export const iconColors = {
  ...iconColorsOnWhite,
  iconDefault: neutralColors['system-n-700'],
  iconInactive: neutralColors['system-n-500'],
  iconDisabled: neutralColors['system-n-300'],
};
