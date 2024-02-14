import styled from '@emotion/styled';
import {useDarkMode} from 'storybook-dark-mode';

export const StyledPalletteContainer = styled.div`
  padding: 0 20px;
  color: ${() => (useDarkMode() ? 'white' : 'black')};

  h3 {
    margin-top: 30px;
  }
`;

export const Styledwrapper = styled.div`
  margin: 20px 0;
`;

export const StyledColorRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0;
  justify-content: space-between;
`;

export const StyledParagraph = styled.p`
  flex: 1;
  max-width: 500px;
  font-size: 16px;
  margin-left: 30px;
`;

export const StyledColorUnit = styled.div<{width?: string; bgcolor: string}>`
  width: ${(props) => props.width || '130px'};
  height: 130px;
  background: ${(props) => props.bgcolor};
`;

export const ColorUnitContainer = styled.div<{padding?: string}>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding || '0'};

  p {
    font-size: 14px;
    font-weight: 600;
  }

  span {
    color: #999;
  }
`;

export const ColorUnitRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ColorBlock = styled.div<{bgColor: string}>`
  width: 200px;
  height: 150px;
  border-radius: 5px 5px 0 0;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const TokenName = styled.td`
  font-size: 18px;
  color: #999;
`;

export const ColorBlockWrapper = styled.div`
  width: 202px;
  margin: 20px 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #c5c5c5;
`;

export const ColorBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  align-self: flex-start;
`;

export const ColorContrastBlock = styled.div<{mode: string}>`
  margin: 0 10px;
  text-align: center;

  span {
    font-size: 20px;
    color: ${(props) => (props.mode === 'light' ? '#ffffff' : '#000000')};
  }

  div {
    background-color: #141414;
    color: #ffffff;
    padding: 5px 10px;
  }
`;
