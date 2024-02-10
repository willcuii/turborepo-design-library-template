import type {Meta} from '@storybook/react';

import Pallete from './BrandPallete';
import UIcolors from './UIcolors';

const meta: Meta<typeof Pallete> = {
  title: 'Tokens/Colors',
  component: Pallete,
};

export default meta;

// type Story = StoryObj<typeof Pallete>;

export const BrandPallete = {
  render: () => <Pallete />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fNjLK6NuE2xXm2MsQQkBVF/Halo-UI-1.0.0?type=design&node-id=839-12331&mode=design&t=zYpAhBY2yjbA57Sl-0',
    },
  },
};

export const UIColors = {
  render: () => <UIcolors />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fNjLK6NuE2xXm2MsQQkBVF/Halo-UI-1.0.0?type=design&node-id=844-12615&mode=design&t=zYpAhBY2yjbA57Sl-0',
    },
  },
};
