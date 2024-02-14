import {create} from '@storybook/theming/create';
import {ThemeDark} from '../src/tokens/themes/ThemeDark';
import {
  backgroundColors,
  borderColors,
  interactiveColors,
  textColors,
} from '@/tokens/colors/colorsOnDark';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Lato", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Prenuvo Halo UI Library',
  brandUrl: 'https://prenuvo.com',
  brandImage: '../public/logo-white.svg',
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
