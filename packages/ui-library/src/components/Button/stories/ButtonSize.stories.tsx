import * as React from 'react';
import Button from '..';
import type {ButtonSize, ButtonVariant} from '../Button.type';
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
export const ButtonSizes = () => {
  const size = ['xsmall', 'small', 'medium', 'large'];
  const variant = ['gradient', 'primary', 'outlined', 'text'];

  const SizeMap = size.map((size) => (
    <Row>
      {variant.map((variant) => (
        <Column>
          <Button
            btnSize={size as ButtonSize}
            btnVariant={variant as ButtonVariant}
          >
            {capitalize(size)} {variant}
          </Button>
        </Column>
      ))}
    </Row>
  ));
  return SizeMap;
};

ButtonSizes.parameters = {
  docs: {
    description: {
      story:
        'A button supports `xsmall`, `small`, `medium` and `large` size. Default size is `medium`.',
    },
  },
};
