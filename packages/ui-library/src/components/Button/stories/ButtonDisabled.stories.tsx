import * as React from 'react';
import Button from '..';
import type {ButtonVariant} from '../Button.type';
import styled from '@emotion/styled';
import {capitalize} from '@mui/material';

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 30px 20px 0;
`;

export default {};
export const ButtonDisabled = () => {
  const variant = ['gradient', 'primary', 'outlined', 'text'];

  return (
    <Row>
      {variant.map((variant) => (
        <Column>
          <Button disabled btnVariant={variant as ButtonVariant}>
            {capitalize(variant)} disabled
          </Button>
        </Column>
      ))}
    </Row>
  );
};

ButtonDisabled.parameters = {
  docs: {
    description: {
      story: 'A button can show that it cannot be interacted with.',
    },
  },
};
