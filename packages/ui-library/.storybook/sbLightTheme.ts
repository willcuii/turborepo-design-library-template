import {create} from '@storybook/theming/create';
import {
  backgroundColors,
  borderColors,
  interactiveColors,
  textColors,
} from '@/tokens/colors/colorsOnWhite';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Lato", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Prenuvo Halo UI Library',
  brandUrl: 'https://prenuvo.com',
  brandImage: '../public/halo_logo_teal.png',
  brandTarget: '_self',

  // Colors
  colorPrimary: interactiveColors.primary,
  colorSecondary: interactiveColors.secondary,

  // UI
  appBg: backgroundColors.bgBase,
  appContentBg: backgroundColors.bgBase,
  appPreviewBg: backgroundColors.bgBase,
  appBorderColor: borderColors.borderDefault,
  appBorderRadius: 3,

  // Text colors
  textColor: textColors.textDefault,
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: textColors.textDefault,
  barSelectedColor: textColors.textSuccessStrong,
  barBg: backgroundColors.bgBase,

  // Form colors
  inputBg: backgroundColors.bgBase,
  inputBorder: borderColors.borderDefault,
  inputTextColor: textColors.textDefault,
  inputBorderRadius: 3,
});
