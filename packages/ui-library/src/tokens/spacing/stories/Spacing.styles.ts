import styled from 'styled-components';
import {ThemeLight} from '../../themes/ThemeLight';

export const StyledSpacingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${ThemeLight.colors.background.bgOnBaseInset};
`;

export const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 0.5px solid ${ThemeLight.colors.border.borderDefault};
`;

export const StyledRowItems = styled.div<{flex: number}>`
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  flex: ${(props) => props.flex};
`;

export const StyledSpacingItem = styled.div<{spacing: string}>`
  height: 15px;
  border-radius: 20px;
  width: ${(props) => props.spacing};
  background-color: ${ThemeLight.colors.interactive.primary};
`;
