import React from 'react';
import {ColorPalette, ColorItem} from '@storybook/blocks';
import {useDarkMode} from 'storybook-dark-mode';
import {ThemeDark} from '../../themes/ThemeDark';
import {ThemeLight} from '../../themes/ThemeLight';

const Colors: React.FC = () => {
  const theme = useDarkMode() ? ThemeDark : ThemeLight;

  return (
    <div>
      <h2>Interactive Colors</h2>
      <ColorPalette>
        <ColorItem
          title="colors.interactive"
          subtitle="Primary"
          colors={{
            primary: theme.colors.interactive.primary,
            primaryHover: theme.colors.interactive.primaryHover,
            onPrimary: theme.colors.interactive.onPrimary,
            primaryContainer: theme.colors.interactive.primaryContainer,
            onPrimaryContainer: theme.colors.interactive.onPrimaryContainer,
          }}
        />
        <ColorItem
          title="colors.interactive"
          subtitle="Secondary"
          colors={{
            secondary: theme.colors.interactive.secondary,
            secondaryHover: theme.colors.interactive.secondaryHover,
            onSecondary: theme.colors.interactive.onSecondary,
            secondaryContainer: theme.colors.interactive.secondaryContainer,
            onSecondaryContainer: theme.colors.interactive.onSecondaryContainer,
          }}
        />
        <ColorItem
          title="colors.interactive"
          subtitle="Focus"
          colors={{
            onFocusOverlay: theme.colors.interactive.onFocusOverlay,
            onContainerFocusOverlay:
              theme.colors.interactive.onContainerFocusOverlay,
          }}
        />
      </ColorPalette>

      <h2>Text Colors</h2>
      <ColorPalette>
        <ColorItem
          title="colors.text"
          subtitle="Default"
          colors={{
            textDefault: theme.colors.text.textDefault,
            textInactive: theme.colors.text.textInactive,
            textDisabled: theme.colors.text.textDisabled,
          }}
        />
        <ColorItem
          title="colors.text"
          subtitle="Info"
          colors={{
            textInfo: theme.colors.text.textInfo,
            textInfoStrong: theme.colors.text.textInfoStrong,
          }}
        />
        <ColorItem
          title="colors.text"
          subtitle="Success"
          colors={{
            textSuccess: theme.colors.text.textSuccess,
            textSuccessStrong: theme.colors.text.textSuccessStrong,
          }}
        />
        <ColorItem
          title="colors.text"
          subtitle="Warning"
          colors={{
            textWarning: theme.colors.text.textWarning,
            textWarningStrong: theme.colors.text.textWarningStrong,
          }}
        />
        <ColorItem
          title="colors.text"
          subtitle="Error"
          colors={{
            textError: theme.colors.text.textError,
            textErrorActive: theme.colors.text.textErrorActive,
            textErrorStrong: theme.colors.text.textErrorStrong,
          }}
        />
      </ColorPalette>

      <h2>Background Colors</h2>
      <ColorPalette>
        <ColorItem
          title="colors.background"
          subtitle="Base"
          colors={{
            bgBase: theme.colors.background.bgBase,
            bgOnBase: theme.colors.background.bgOnBase,
            bgOnBaseInset: theme.colors.background.bgOnBaseInset,
          }}
        />
        <ColorItem
          title="colors.background"
          subtitle="Input"
          colors={{
            bgInputDefault: theme.colors.background.bgInputDefault,
            bgInputHover: theme.colors.background.bgInputHover,
            bgInputFocused: theme.colors.background.bgInputFocused,
            bgInputDisabled: theme.colors.background.bgInputDisabled,
          }}
        />
        <ColorItem
          title="colors.background"
          subtitle="Button"
          colors={{
            bgButton: theme.colors.background.bgButton,
            bgButtonHover: theme.colors.background.bgButtonHover,
            bgButtonDisabled: theme.colors.background.bgButtonDisabled,
          }}
        />
        <ColorItem
          title="colors.background"
          subtitle="Event"
          colors={{
            bgInfo: theme.colors.background.bgInfo,
            bgSuccess: theme.colors.background.bgSuccess,
            bgWarning: theme.colors.background.bgWarning,
            bgError: theme.colors.background.bgError,
          }}
        />
      </ColorPalette>

      <h2>Border Colors</h2>
      <ColorPalette>
        <ColorItem
          title="colors.border"
          subtitle="Base"
          colors={{
            borderDefault: theme.colors.border.borderDefault,
            borderHover: theme.colors.border.borderHover,
            borderFocus: theme.colors.border.borderFocus,
            borderDisabled: theme.colors.border.borderDisabled,
          }}
        />
        <ColorItem
          title="colors.border"
          subtitle="Button"
          colors={{
            borderButtonDefault: theme.colors.border.borderButtonDefault,
            borderButtonDisabled: theme.colors.border.borderButtonDisabled,
          }}
        />
        <ColorItem
          title="colors.border"
          subtitle="Divider"
          colors={{
            borderDividerStrong: theme.colors.border.borderDividerStrong,
            borderDividerLight: theme.colors.border.borderDividerLight,
          }}
        />
        <ColorItem
          title="colors.border"
          subtitle="Event"
          colors={{
            borderInfo: theme.colors.border.borderInfo,
            borderSuccess: theme.colors.border.borderSuccess,
            borderWarning: theme.colors.border.borderWarning,
            borderError: theme.colors.border.borderError,
          }}
        />
      </ColorPalette>

      <h2>Icon Colors</h2>
      <ColorPalette>
        <ColorItem
          title="colors.icon"
          subtitle="Base"
          colors={{
            iconDefault: theme.colors.icon.iconDefault,
            iconActive: theme.colors.icon.iconActive,
            iconInactive: theme.colors.icon.iconInactive,
            iconDisabled: theme.colors.icon.iconDisabled,
          }}
        />
        <ColorItem
          title="colors.icon"
          subtitle="Interactive"
          colors={{
            iconInteractive: theme.colors.icon.iconInteractive,
            iconInteractiveActive: theme.colors.icon.iconInteractiveActive,
            iconInteractiveHover: theme.colors.icon.iconInteractiveHover,
          }}
        />
        <ColorItem
          title="colors.icon"
          subtitle="Event"
          colors={{
            iconInfo: theme.colors.icon.iconInfo,
            iconSuccess: theme.colors.icon.iconSuccess,
            iconWarning: theme.colors.icon.iconWarning,
            iconError: theme.colors.icon.iconError,
          }}
        />
      </ColorPalette>
    </div>
  );
};

export default Colors;
