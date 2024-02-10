import React from 'react';
import {
  primaryColors,
  secondaryColors,
  tealColors,
  gradient,
} from '../colorPalette';
import styled from 'styled-components';

const StyledColorRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const StyledColorUnit = styled.div<{width?: string; bgcolor: string}>`
  width: ${(props) => props.width || '130px'};
  height: 130px;
  background: ${(props) => props.bgcolor};
`;

const ColorUnitContainer = styled.div<{padding?: string}>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding || '0'};
`;

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
    </ColorUnitContainer>
  );
};

const BrandPallete: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Brand Palette</h1>
        <p>
          Our design system leverages a purposeful set of color styles as the
          perfect starting point for any brand or project.
        </p>
      </div>

      <h3>Primary</h3>
      <h4>Primary Dark Teal</h4>
      <p>
        Our brand is represented by the primary colour. To maintain a consistent
        and clear brand image, DO NOT use our dark teal in shades or tints for
        graphic or UI elements.{' '}
      </p>
      <StyledColorRow>
        <ColorUnit
          name={'primary-pt-500'}
          color={primaryColors['primary-pt-500']}
          width="650px"
        />
      </StyledColorRow>

      <h4>Primary Geyser</h4>
      <p>
        Geyser as a complementing neutral colour can be used in various
        tints/shades in graphic and UI elements.
      </p>
      <StyledColorRow>
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
      </StyledColorRow>

      <h3>Secondary</h3>
      <p>
        The secondary palette is a complementary palette designed to create
        uniqueness and moments of delight for the Prenuvo brand. Each hue comes
        with a default shade (in bold) and lighter and darker shades are
        manually selected to ensure consistent brightness across the board.
      </p>
      <p>Azure Blue</p>
      <StyledColorRow>
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
      </StyledColorRow>

      <p>Seafoam Green</p>
      <StyledColorRow>
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
      </StyledColorRow>

      <p>Punch Pink</p>
      <StyledColorRow>
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
      </StyledColorRow>

      <p>Violet Purple</p>
      <StyledColorRow>
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
      </StyledColorRow>

      <p>Yellow</p>
      <StyledColorRow>
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
      </StyledColorRow>

      <h2>Neutral</h2>
      <p>
        The neutral palette is created with true greys and it consists of 15
        shades to accommodate a wide range of UI element, text and background
        usages.
      </p>
      <StyledColorRow>
        <ColorUnit name={'black'} color={tealColors['black']} width="500px" />
      </StyledColorRow>

      <StyledColorRow>
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
      </StyledColorRow>

      <h2>Gradient</h2>
      <StyledColorRow>
        {Object.keys(gradient).map((key) => (
          <ColorUnit
            name={key}
            color={gradient[key as keyof typeof gradient]}
          />
        ))}
      </StyledColorRow>
    </div>
  );
};

export default BrandPallete;
