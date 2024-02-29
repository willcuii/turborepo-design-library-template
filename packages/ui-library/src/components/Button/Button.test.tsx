import React from 'react';
import {describe, expect, it, vi} from 'vitest';
import userEvent from '@testing-library/user-event';
import {render, fireEvent} from '@testing-library/react';
import Button from './Button';

describe('Button Unit Tests', () => {
  describe('when rendered as a button', () => {
    it('renders the button with the provided text', () => {
      const {getByText} = render(<Button>Click me</Button>);
      expect(getByText('Click me')).toBeDefined();
    });

    it('can be focused', () => {
      const {getByRole} = render(<Button>This is a button</Button>);
      const button = getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      userEvent.tab();
      expect(document.activeElement).toEqual(button);
    });

    it('cannot be focused when disabled has been passed to the component', () => {
      const {getByRole} = render(<Button disabled>This is a button</Button>);
      const button = getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      userEvent.tab();
      expect(document.activeElement).not.toEqual(button);
    });

    it('can trigger the onClick function when clicked', () => {
      const onClick = vi.fn();
      const {getByText} = render(<Button onClick={onClick}>Click me</Button>);
      fireEvent.click(getByText('Click me'));
      expect(onClick).toHaveBeenCalled();
    });

    it('can not trigger the onClick function by being clicked when disabled', () => {
      const onClick = vi.fn();
      const {getByText} = render(
        <Button disabled onClick={onClick}>
          Click me
        </Button>,
      );

      fireEvent.click(getByText('Click me'));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('renders the button as disabled when disabled prop is true', () => {
      const {getByText} = render(<Button disabled>Click me</Button>);
      expect(getByText('Click me')).toHaveProperty('disabled', true);
    });
  });

  // it('renders the button with the primary btnVariant', () => {
  //   const {getByText} = render(<Button btnVariant="primary">Click me</Button>);
  //   expect(getByText('Click me')).toMatchSnapshot();
  // });

  // it('renders the button with the outlined btnVariant', () => {
  //   const {getByText} = render(<Button btnVariant="primary">Click me</Button>);
  //   expect(getByText('Click me')).toMatchSnapshot();
  // });

  // it('renders the button with the provided btnSize', () => {
  //   const {getByText} = render(<Button btnVariant="outlined">Click me</Button>);
  //   expect(getByText('Click me')).toMatchSnapshot();
  // });
});
