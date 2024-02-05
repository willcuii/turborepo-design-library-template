import {neutralColors, secondaryColors, systemColors} from './colorPalette';
import {interactiveColors as interactiveColorsOnWhite} from './colorsOnWhite';

export const interactiveColors = {
  ...interactiveColorsOnWhite,
  onPrimary: neutralColors['system-n-950'],
  primaryContainer: secondaryColors['secondary-g-900'],
  onPrimaryContainer: secondaryColors['secondary-g-100'],

  secondary: neutralColors['system-n-400'],
  secondaryHover: neutralColors['system-n-900'],
  onSecondary: neutralColors['system-n-50'],
  secondaryContainer: neutralColors['system-n-850'],
  onSecondaryContainer: neutralColors['system-n-400'],

  onPrimaryContainerFocusOverlay: 'rgba(17, 17, 17, 0.4)',
};

export const textColors = {
  textDefault: neutralColors['system-n-50'],
  textInactive: neutralColors['system-n-400'],
  textDisabled: neutralColors['system-n-800'],

  textInfoStrong: secondaryColors['secondary-b-600'],
  textInfo: secondaryColors['secondary-b-400'],

  textErrorStrong: systemColors['system-r-400'],
  textErrorActive: systemColors['system-r-500'],
  textError: systemColors['system-r-400'],

  textWarningStrong: systemColors['system-o-700'],
  textWarning: systemColors['system-o-400'],

  textSuccessStrong: secondaryColors['secondary-g-800'],
  textSuccess: secondaryColors['secondary-g-500'],
};

export const backgroundColors = {
  bgBase: 'rgba(18, 18, 18, 1)',
  bgOnBase: neutralColors['system-n-950'],
  bgOnBaseInset: neutralColors['system-n-900'],

  bgInputDefault: neutralColors['system-n-900'],
  bgInputHover: neutralColors['system-n-850'],
  bgInputFocused: neutralColors['system-n-900'],
  bgInputDisabled: neutralColors['system-n-900'],

  bgInfo: secondaryColors['secondary-b-200'],
  bgSuccess: secondaryColors['secondary-g-300'],
  bgWarning: systemColors['system-o-200'],
  bgError: 'rgba(71, 47, 43, 1)',

  bgButton: neutralColors['system-n-950'],
  bgButtonHover: neutralColors['system-n-950'],
  bgButtonDisabled: neutralColors['system-n-900'],
};

export const borderColors = {
  borderDefault: neutralColors['system-n-800'],
  borderHover: neutralColors['system-n-600'],
  borderFocus: secondaryColors['secondary-g-500'],
  borderDisabled: neutralColors['system-n-900'],

  borderDividerStrong: neutralColors['system-n-600'],
  borderDividerLight: neutralColors['system-n-850'],

  borderInfo: secondaryColors['secondary-b-300'],
  borderSuccess: secondaryColors['secondary-g-500'],
  borderError: systemColors['system-r-400'],
  borderWarning: systemColors['system-o-300'],

  borderButtonDefault: neutralColors['system-n-700'],
  borderButtonDisabled: textColors.textDisabled,
};

export const iconColors = {
  iconActive: neutralColors['system-n-50'],
  iconDefault: neutralColors['system-n-400'],
  iconInactive: neutralColors['system-n-800'],
  iconDisabled: neutralColors['system-n-800'],

  iconInfo: secondaryColors['secondary-b-400'],
  iconSuccess: secondaryColors['secondary-g-500'],
  iconWarning: systemColors['system-o-400'],
  iconError: systemColors['system-r-400'],

  iconInteractive: secondaryColors['secondary-g-500'],
  iconInteractiveActive: secondaryColors['secondary-g-900'],
  iconInteractiveHover: secondaryColors['secondary-g-800'],
};
