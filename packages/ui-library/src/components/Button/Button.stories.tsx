import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import styled from '@emotion/styled';

import Button from './Button';
import {ButtonVariant} from './Button.type';
import {capitalize} from '../../utils/stringUtils';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

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

const Title = styled.h5`
  margin-bottom: 10px;
`;

const ButtonStoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 24px;

  li {
    list-style: auto;
  }
`;

export const Overview = () => {
  const typeMap = ['gradient', 'primary', 'outlined', 'text'];
  const sizeMap = ['large', 'medium', 'small', 'xsmall'];

  const handleClick = () => {
    console.log('Hello Prenuvo');
  };

  const renderButton = (type: ButtonVariant) => (
    <Column style={{margin: 0}}>
      <h2>{capitalize(type)}</h2>
      {sizeMap.map((size) => (
        <Row>
          <Column>
            <Title>Default</Title>
            <Button btnVariant={type} btnSize={size} onClick={handleClick}>
              Button
            </Button>
          </Column>
          <Column>
            <Title>Hovered</Title>
            <Button
              btnVariant={type}
              btnSize={size}
              onClick={handleClick}
              id="btn-hovered"
            >
              Button
            </Button>
          </Column>
          <Column>
            <Title>Activated</Title>
            <Button
              btnVariant={type}
              btnSize={size}
              onClick={handleClick}
              id="btn-activated"
            >
              Button
            </Button>
          </Column>
          <Column>
            <Title>Disabled</Title>
            <Button
              btnVariant={type}
              btnSize={size}
              onClick={handleClick}
              disabled
            >
              Button
            </Button>
          </Column>
        </Row>
      ))}
    </Column>
  );

  return (
    <div style={{padding: '20px'}}>
      <ButtonStoryContainer>
        <h1>Button Overview</h1>
        <li>Can contain an optional leading icon</li>
        <li>Three types: gradient, outlined, and text</li>
        <li>Keep labels concise and in sentence-case</li>
        <li>
          Containers have fully rounded corners and are wide enough to fit label
          text
        </li>
      </ButtonStoryContainer>
      <br />
      <ButtonStoryContainer>
        {typeMap.map((type) => renderButton(type))}
      </ButtonStoryContainer>
    </div>
  );
};

Overview.parameters = {
  pseudo: {
    hover: ['#btn-hovered'],
    // focus: ["#two", "#three"],
    active: ['#btn-activated'],
  },
};

export const Primary: Story = {
  args: {
    onClick: () => {},
    children: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fNjLK6NuE2xXm2MsQQkBVF/Halo-UI-1.0.0?type=design&node-id=876-14110&mode=design&t=zYpAhBY2yjbA57Sl-0',
    },
  },
};

export const Outlined: Story = {
  args: {
    onClick: () => {},
    children: 'Button',
    btnVariant: 'outlined',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fNjLK6NuE2xXm2MsQQkBVF/Halo-UI-1.0.0?type=design&node-id=876-14110&mode=design&t=zYpAhBY2yjbA57Sl-0',
    },
  },
};

export const Text: Story = {
  args: {
    onClick: () => {},
    children: 'Button',
    btnVariant: 'text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fNjLK6NuE2xXm2MsQQkBVF/Halo-UI-1.0.0?type=design&node-id=876-14110&mode=design&t=zYpAhBY2yjbA57Sl-0',
    },
  },
};

export const Gradient: Story = {
  args: {
    onClick: () => {},
    children: 'Button',
    btnVariant: 'gradient',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fNjLK6NuE2xXm2MsQQkBVF/Halo-UI-1.0.0?type=design&node-id=876-14110&mode=design&t=zYpAhBY2yjbA57Sl-0',
    },
  },
};
