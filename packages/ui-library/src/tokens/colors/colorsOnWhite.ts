import {neutralColors, secondaryColors, systemColors} from './colorPalette';

export const interactiveColors = {
  primary: secondaryColors['secondary-g-700'],
  primaryHover: secondaryColors['secondary-g-600'],
  onPrimary: neutralColors['system-white'],
  primaryContainer: secondaryColors['secondary-g-100'],
  onPrimaryContainer: secondaryColors['secondary-g-800'],

  secondary: neutralColors['system-n-850'],
  secondaryHover: neutralColors['system-n-50'],
  onSecondary: neutralColors['system-white'],
  secondaryContainer: neutralColors['system-n-100'],
  onSecondaryContainer: neutralColors['system-n-850'],

  onFocusOverlay: 'rgba(0, 0, 0, 0.12)',
  onContainerFocusOverlay: 'rgba(17, 17, 17, 0.08)',
};

export const textColors = {
  textDefault: neutralColors['system-n-950'],
  textInactive: neutralColors['system-n-600'],
  textDisabled: neutralColors['system-n-200'],

  textInfoStrong: secondaryColors['secondary-b-900'],
  textInfo: secondaryColors['secondary-b-700'],

  textErrorStrong: systemColors['system-r-900'],
  textErrorActive: systemColors['system-r-600'],
  textError: systemColors['system-r-500'],

  textWarningStrong: systemColors['system-o-800'],
  textWarning: systemColors['system-o-500'],

  textSuccessStrong: secondaryColors['secondary-g-800'],
  textSuccess: secondaryColors['secondary-g-700'],
};

export const backgroundColors = {
  bgBase: neutralColors['system-white'],
  bgOnBase: neutralColors['system-white'],
  bgOnBaseInset: neutralColors['system-n-50'],

  bgInputDefault: neutralColors['system-n-50'],
  bgInputHover: neutralColors['system-n-100'],
  bgInputFocused: neutralColors['system-n-50'],
  bgInputDisabled: neutralColors['system-n-100'],

  bgInfo: secondaryColors['secondary-b-100'],
  bgSuccess: secondaryColors['secondary-g-100'],
  bgWarning: systemColors['system-o-100'],
  bgError: systemColors['system-r-100'],

  bgButton: neutralColors['system-white'],
  bgButtonHover: neutralColors['system-white'],
  bgButtonDisabled: neutralColors['system-n-100'],
};

export const borderColors = {
  borderDefault: neutralColors['system-n-300'],
  borderHover: neutralColors['system-n-500'],
  borderFocus: secondaryColors['secondary-g-600'],
  borderDisabled: neutralColors['system-n-200'],

  borderDividerStrong: neutralColors['system-n-300'],
  borderDividerLight: neutralColors['system-n-150'],

  borderInfo: secondaryColors['secondary-b-500'],
  borderSuccess: secondaryColors['secondary-g-500'],
  borderError: systemColors['system-r-500'],
  borderWarning: systemColors['system-o-500'],

  borderButtonDefault: neutralColors['system-n-150'],
  borderButtonDisabled: neutralColors['system-n-100'],
};

export const iconColors = {
  iconActive: neutralColors['system-n-950'],
  iconDefault: neutralColors['system-n-600'],
  iconInactive: neutralColors['system-n-400'],
  iconDisabled: neutralColors['system-n-200'],

  iconInfo: secondaryColors['secondary-b-700'],
  iconSuccess: secondaryColors['secondary-g-700'],
  iconWarning: systemColors['system-o-500'],
  iconError: systemColors['system-r-500'],

  iconInteractive: secondaryColors['secondary-g-700'],
  iconInteractiveActive: secondaryColors['secondary-g-300'],
  iconInteractiveHover: secondaryColors['secondary-g-100'],
};
