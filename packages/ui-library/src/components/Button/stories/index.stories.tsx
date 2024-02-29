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
    onClick: {
      control: {
        type: 'function',
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
        'Buttons allow users to take actions, and make choices, with a single tap or click.\n' +
        '- For dialog boxes and panels, where people are moving through a sequence of screens, right-align buttons with the container.\n' +
        '- For single-page forms and focused tasks, left-align buttons with the container.\n' +
        '- Always place the primary button on the left, the secondary button just to the right of it.\n' +
        '- Show only one primary button that inherits theme color at rest state. If there are more than two buttons with equal priority, all buttons should have neutral backgrounds.\n' +
        '- Don\'t use a button to navigate to another place; use a link instead. The exception is in a wizard where "Back" and "Next" buttons may be used.\n',
    },
  },
};

export default meta;
