import React from 'react';
import {ColorsDark} from '../../themes/ThemeDark';
import {ColorsLight} from '../../themes/ThemeLight';
import {hex, score} from 'wcag-contrast';
import {rgbToHex} from '../../../utils/colorUtils';
import {
  ColorBlock,
  ColorBlockWrapper,
  StyledPalletteContainer,
  ColorUnitRow,
  TokenName,
  ColorBlockContent,
  ColorContrastBlock,
} from './Colors.styles';
import {useDarkMode} from 'storybook-dark-mode';
import {Divider} from '@mui/material';

const ColourList = ({colorType}: {colorType: string}) => {
  const colors = useDarkMode() ? ColorsDark : ColorsLight;
  const filteredColors = colors[colorType as keyof typeof colors];

  const list = Object.entries(filteredColors).map((color) => {
    const colorName = color[0];
    const colorValue = rgbToHex(color[1]);

    return (
      <ColorBlockWrapper>
        <ColorBlock bgColor={colorValue}>
          <ColorContrastBlock mode="dark">
            <span>A</span>
            <div>{score(hex(colorValue, '#000000'))}</div>
          </ColorContrastBlock>
          <ColorContrastBlock mode="light">
            <span>A</span>
            <div>{score(hex(colorValue, '#FFFFFF'))}</div>
          </ColorContrastBlock>
        </ColorBlock>
        <ColorBlockContent>
          <h5>{colorName}</h5>
          <TokenName>{colorValue}</TokenName>
        </ColorBlockContent>
      </ColorBlockWrapper>
    );
  });

  return <ColorUnitRow>{list}</ColorUnitRow>;
};

const UIColors: React.FC = () => {
  return (
    <StyledPalletteContainer>
      <h1>UI Colors</h1>

      <h3>Interactive</h3>
      <Divider />
      <ColourList colorType="interactive" />

      <h3>Text</h3>
      <Divider />
      <ColourList colorType="text" />

      <h3>Icon</h3>
      <Divider />
      <ColourList colorType="icon" />

      <h3>Background</h3>
      <Divider />
      <ColourList colorType="background" />

      <h3>Border</h3>
      <Divider />
      <ColourList colorType="border" />
    </StyledPalletteContainer>
  );
};

export default UIColors;
