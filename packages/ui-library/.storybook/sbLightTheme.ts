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
  brandImage:
    'https://cdn.cookielaw.org/logos/0729f7e6-4f65-441c-9882-d3130a57f1e5/9ef970c8-d63c-49dc-bc9d-a9875ccefdd9/65019853-e900-4e6b-8f5d-54f785de1afc/01-Wordmark-RGB-M_(1).png',
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
