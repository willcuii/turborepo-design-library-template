import * as React from 'react';
import Button from '..';
import type {ButtonVariant} from '../Button.type';
import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 700px;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 30px 20px 0;
`;

export default {};
export const ButtonVariants = () => {
  const variant = ['gradient', 'primary', 'outlined', 'text'];

  return (
    <Row>
      {variant.map((variant) => (
        <Column>
          <Button btnSize="medium" btnVariant={variant as ButtonVariant}>
            {variant}
          </Button>
        </Column>
      ))}
    </Row>
  );
};

ButtonVariants.parameters = {
  docs: {
    description: {
      story:
        '- `primary`: Highlights as a key action.\n' +
        '- `outlined`: Shows a border, no fill.\n' +
        '- `text`: Text-only, no background.\n' +
        '- `gradient`: Uses a gradient background.\n',
    },
  },
};
