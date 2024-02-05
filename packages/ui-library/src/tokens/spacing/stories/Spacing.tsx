import React from 'react';
import {spacings} from '../spacings';
import {
  StyledHeaderContainer,
  StyledSpacingItem,
  StyledRowItems,
  StyledSpacingContainer,
  StyledRowContainer,
} from './Spacing.styles';

const Spacing: React.FC = () => {
  return (
    <StyledSpacingContainer>
      <StyledHeaderContainer>
        <StyledRowItems flex={2}>Value</StyledRowItems>
        <StyledRowItems flex={2}>Pixels</StyledRowItems>
        <StyledRowItems flex={3}>Representation</StyledRowItems>
      </StyledHeaderContainer>

      {Object.entries(spacings).map(([key, value]) => (
        <StyledRowContainer id={key}>
          <StyledRowItems flex={2}>{key}</StyledRowItems>
          <StyledRowItems flex={2}>{value}</StyledRowItems>
          <StyledRowItems flex={3}>
            <StyledSpacingItem spacing={value} />
          </StyledRowItems>
        </StyledRowContainer>
      ))}
    </StyledSpacingContainer>
  );
};

export default Spacing;
