import {create} from '@storybook/theming/create';
import {ThemeLight} from '../src/tokens/themes/ThemeLight';

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
  colorPrimary: ThemeLight.colors.interactive.primary,
  colorSecondary: ThemeLight.colors.interactive.secondary,

  // UI
  appBg: ThemeLight.colors.background.bgBase,
  appContentBg: ThemeLight.colors.background.bgBase,
  appPreviewBg: ThemeLight.colors.background.bgBase,
  appBorderColor: ThemeLight.colors.border.borderDefault,
  appBorderRadius: 3,

  // Text colors
  textColor: ThemeLight.colors.text.textDefault,
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: ThemeLight.colors.text.textDefault,
  barSelectedColor: ThemeLight.colors.text.textSuccessStrong,
  barBg: ThemeLight.colors.background.bgBase,

  // Form colors
  inputBg: ThemeLight.colors.background.bgBase,
  inputBorder: ThemeLight.colors.border.borderDefault,
  inputTextColor: ThemeLight.colors.text.textDefault,
  inputBorderRadius: 3,
});
