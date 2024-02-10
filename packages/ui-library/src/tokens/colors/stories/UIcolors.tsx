import React from 'react';
import {ThemeDark} from '../../themes/ThemeDark';
import {ThemeLight} from '../../themes/ThemeLight';
import {
  backgroundColors,
  borderColors,
  iconColors,
  interactiveColors,
  textColors,
} from '../colorsOnWhite';
import styled from 'styled-components';
import {rgbToHex} from '../../../utils/colorUtils';

interface ColorTableProps {
  title: string;
  colors: Record<string, string>;
  colorType: string;
}

const ColorBlock = styled.div<{bgColor: string; showBoarder?: boolean}>`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  border: ${(props) => (props.showBoarder ? '1px solid #f1f1f1' : '0')};
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
`;

const TokenName = styled.td`
  width: 300px;
  font-size: 18px;
`;

const ColorCell = styled.td<{theme: 'light' | 'dark'}>`
  width: 500px;
  padding: 20px;
  background-color: ${(props) =>
    props.theme === 'light'
      ? ThemeLight.colors.background.bgOnBase
      : ThemeDark.colors.background.bgOnBase};
`;

const ColorRow: React.FC<{name: string; colors: string}> = ({name, colors}) => {
  const light: typeof ThemeLight.colors & {
    [key: string]: Record<string, string>;
  } = ThemeLight.colors;
  const dark: typeof ThemeDark.colors & {
    [key: string]: Record<string, string>;
  } = ThemeDark.colors;

  const lightColor = light[colors][name] as string;
  const darkColor = dark[colors][name] as string;

  const ColorText = ({color, text}: {color: string; text: string}) => (
    <p
      style={{
        color,
        filter: 'invert(1) grayscale(1) contrast(100)',
      }}
    >
      {text}
    </p>
  );

  return (
    <tr>
      <TokenName>{name}</TokenName>
      <ColorCell theme={'light'}>
        <ColorBlock bgColor={lightColor} showBoarder>
          <ColorText color={lightColor} text={rgbToHex(lightColor)} />
          <ColorText color={lightColor} text={lightColor} />
        </ColorBlock>
      </ColorCell>
      <ColorCell theme={'dark'}>
        <ColorBlock bgColor={darkColor}>
          <ColorText color={darkColor} text={rgbToHex(darkColor)} />
          <ColorText color={darkColor} text={darkColor} />
        </ColorBlock>
      </ColorCell>
    </tr>
  );
};

const ColorTable: React.FC<ColorTableProps> = ({title, colors, colorType}) => {
  return (
    <>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Token Name</th>
            <th>Light Theme</th>
            <th>Dark Theme</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(colors).map((key) => {
            return <ColorRow name={key} colors={colorType} />;
          })}
        </tbody>
      </table>
    </>
  );
};

const UIColors: React.FC = () => {
  return (
    <div>
      <ColorTable
        title="Interactive"
        colors={interactiveColors}
        colorType="interactive"
      />

      <ColorTable title="Text" colors={textColors} colorType="text" />

      <ColorTable title="Icon" colors={iconColors} colorType="icon" />

      <ColorTable
        title="Background"
        colors={backgroundColors}
        colorType="background"
      />

      <ColorTable title="Border" colors={borderColors} colorType="border" />
    </div>
  );
};

export default UIColors;
