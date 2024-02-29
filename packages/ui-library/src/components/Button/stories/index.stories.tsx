import type {Meta} from '@storybook/react';

import Button from '..';

export {Default} from './ButtonDefault.stories';
export {ButtonVariants} from './ButtonVariant.stories';
export {ButtonSizes} from './ButtonSize.stories';
export {ButtonDisabled} from './ButtonDisabled.stories';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    btnVariant: {
      control: {
        type: 'select',
        options: ['primary', 'outlined', 'text', 'gradient'],
      },
    },
    btnSize: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large'],
      },
    },
  },
  parameters: {
    controls: {expanded: true},
  },
};

meta.parameters = {
  ...meta.parameters,
  docs: {
    description: {
      component:
        'Buttons allow users to take actions, and make choices, with a single tap or click.',
    },
  },
};

export default meta;
