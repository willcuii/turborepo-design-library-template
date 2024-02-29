import {Preview} from '@storybook/react';
import {useDarkMode} from 'storybook-dark-mode';
import ThemeProvider from '../src/components/ThemeProvider/ThemeProvider';

import {ThemeLight} from '../src/tokens/themes/ThemeLight';
import {ThemeDark} from '../src/tokens/themes/ThemeDark';
import sbDarkTheme from './sbDarkTheme';
import sbLightTheme from './sbLightTheme';

const ThemeWrapper = (props: any) => {
  return (
    <ThemeProvider themeName={useDarkMode() ? 'dark' : 'light'}>
      {props.children}
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: 'light',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      dark: {
        ...ThemeDark,
        ...sbDarkTheme,
      },
      light: {...ThemeLight, ...sbLightTheme},
    },
  },
};

export const decorators = [
  (renderStory: () => any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
export default preview;
