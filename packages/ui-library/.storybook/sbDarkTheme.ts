import {create} from '@storybook/theming/create';
import {ThemeDark} from '../src/tokens/themes/ThemeDark';

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
  colorPrimary: ThemeDark.colors.interactive.primaryContainer,
  colorSecondary: ThemeDark.colors.interactive.secondaryContainer,

  // UI
  appBg: ThemeDark.colors.background.bgBase,
  appContentBg: ThemeDark.colors.background.bgBase,
  appPreviewBg: ThemeDark.colors.background.bgBase,
  appBorderColor: ThemeDark.colors.border.borderDefault,
  appBorderRadius: 3,

  // Text colors
  textColor: ThemeDark.colors.text.textDefault,
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: ThemeDark.colors.text.textDefault,
  barSelectedColor: ThemeDark.colors.text.textSuccessStrong,
  barBg: ThemeDark.colors.background.bgBase,

  // Form colors
  inputBg: ThemeDark.colors.background.bgBase,
  inputBorder: ThemeDark.colors.border.borderDefault,
  inputTextColor: ThemeDark.colors.text.textDefault,
  inputBorderRadius: 3,
});
