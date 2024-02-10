import type {Meta, StoryObj} from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    onClick: () => {},
    children: 'Button',
  },
  // TODO
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fNjLK6NuE2xXm2MsQQkBVF/Halo-UI-1.0.0?type=design&node-id=876-14110&mode=design&t=zYpAhBY2yjbA57Sl-0',
    },
  },
};
