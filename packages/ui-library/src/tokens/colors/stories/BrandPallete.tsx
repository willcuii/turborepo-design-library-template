import React from 'react';
import {
  primaryColors,
  secondaryColors,
  tealColors,
  gradientColors,
} from '../colorPalette';
import Divider from '../../../components/Divider/Divider';
import {
  ColorUnitContainer,
  StyledColorUnit,
  StyledPalletteContainer,
  Styledwrapper,
  StyledColorRow,
  StyledParagraph,
  ColorUnitRow,
} from './Colors.styles';
import {rgbToHex} from '@/utils/colorUtils';

type ColorUnitProps = {
  name: string;
  color: string;
  width?: string;
};

const ColorUnit = ({name, color, width}: ColorUnitProps) => {
  const isGradient = color?.startsWith('linear-gradient');
  return (
    <ColorUnitContainer key={name} padding={isGradient ? '10px' : '0'}>
      <StyledColorUnit bgcolor={color} width={width} />
      <p>{name}</p>
      <span>{rgbToHex(color)}</span>
    </ColorUnitContainer>
  );
};

const BrandPallete: React.FC = () => {
  return (
    <StyledPalletteContainer>
      <Styledwrapper>
        <h1>Brand Palette</h1>
        <p>
          Our design system leverages a purposeful set of color styles as the
          perfect starting point for any brand or project.
        </p>
      </Styledwrapper>

      <Divider />

      <Styledwrapper>
        <h3>Primary</h3>

        <h4>Primary Dark Teal</h4>
        <Divider />
        <StyledColorRow>
          <ColorUnit
            name={'primary-pt-500'}
            color={primaryColors['primary-pt-500']}
            width="650px"
          />
          <StyledParagraph>
            Our brand is represented by the primary colour. To maintain a
            consistent and clear brand image, DO NOT use our dark teal in shades
            or tints for graphic or UI elements.{' '}
          </StyledParagraph>
        </StyledColorRow>

        <h4>Primary Geyser</h4>
        <Divider />
        <StyledColorRow>
          <ColorUnitRow>
            {Object.keys(primaryColors).map((key) => {
              if (key !== 'primary-pt-500') {
                return (
                  <ColorUnit
                    name={key}
                    color={primaryColors[key as keyof typeof primaryColors]}
                  />
                );
              }
              return null;
            })}
          </ColorUnitRow>
          <StyledParagraph>
            Geyser as a complementing neutral colour can be used in various
            tints/shades in graphic and UI elements.
          </StyledParagraph>
        </StyledColorRow>
      </Styledwrapper>

      <br />
      <Styledwrapper>
        <h3>Secondary</h3>
        <p>
          The secondary palette is a complementary palette designed to create
          uniqueness and moments of delight for the Prenuvo brand. Each hue
          comes with a default shade (in bold) and lighter and darker shades are
          manually selected to ensure consistent brightness across the board.
        </p>
      </Styledwrapper>

      <Divider />

      <h4>Azure Blue</h4>

      <ColorUnitRow>
        {Object.keys(secondaryColors).map((key) => {
          if (key.startsWith('secondary-b-')) {
            return (
              <ColorUnit
                name={key}
                color={secondaryColors[key as keyof typeof secondaryColors]}
              />
            );
          }
          return null;
        })}
      </ColorUnitRow>

      <br />
      <Divider />

      <h4>Seafoam Green</h4>
      <ColorUnitRow>
        {Object.keys(secondaryColors).map((key) => {
          if (key.startsWith('secondary-g-')) {
            return (
              <ColorUnit
                name={key}
                color={secondaryColors[key as keyof typeof secondaryColors]}
              />
            );
          }
          return null;
        })}
      </ColorUnitRow>

      <br />
      <Divider />

      <h4>Punch Pink</h4>
      <ColorUnitRow>
        {Object.keys(secondaryColors).map((key) => {
          if (key.startsWith('secondary-p-')) {
            return (
              <ColorUnit
                name={key}
                color={secondaryColors[key as keyof typeof secondaryColors]}
              />
            );
          }
          return null;
        })}
      </ColorUnitRow>

      <br />
      <Divider />

      <h4>Violet Purple</h4>
      <ColorUnitRow>
        {Object.keys(secondaryColors).map((key) => {
          if (key.startsWith('secondary-v-')) {
            return (
              <ColorUnit
                name={key}
                color={secondaryColors[key as keyof typeof secondaryColors]}
              />
            );
          }
          return null;
        })}
      </ColorUnitRow>

      <br />
      <Divider />

      <h4>Yellow</h4>
      <ColorUnitRow>
        {Object.keys(secondaryColors).map((key) => {
          if (key.startsWith('secondary-y-')) {
            return (
              <ColorUnit
                name={key}
                color={secondaryColors[key as keyof typeof secondaryColors]}
              />
            );
          }
          return null;
        })}
      </ColorUnitRow>

      <br />

      <Styledwrapper>
        <Styledwrapper>
          <h2>Neutral</h2>
          <p>
            The neutral palette is created with true greys and it consists of 15
            shades to accommodate a wide range of UI element, text and
            background usages.
          </p>
        </Styledwrapper>

        <Divider />
        <br />

        <ColorUnitRow>
          <ColorUnit name={'black'} color={tealColors['black']} width="500px" />
        </ColorUnitRow>

        <br />

        <ColorUnitRow>
          {Object.keys(tealColors).map((key) => {
            if (key !== 'black') {
              return (
                <ColorUnit
                  name={key}
                  color={tealColors[key as keyof typeof tealColors]}
                />
              );
            }
            return null;
          })}
        </ColorUnitRow>
      </Styledwrapper>

      <Styledwrapper>
        <h2>Gradient</h2>
        <Divider />
        <br />
        <ColorUnitRow>
          {Object.keys(gradientColors).map((key) => (
            <ColorUnit
              name={key}
              color={gradientColors[key as keyof typeof gradientColors]}
            />
          ))}
        </ColorUnitRow>
      </Styledwrapper>
    </StyledPalletteContainer>
  );
};

export default BrandPallete;
