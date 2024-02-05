// import { render, screen, fireEvent } from 'vitest';
// import Button from './Button';

// describe('Button', () => {
//   it('renders the button with the provided children', () => {
//     render(<Button>Hello</Button>);
//     const buttonElement = screen.getByText('Hello');
//     expect(buttonElement).toBeInTheDocument();
//   });

//   it('calls the onClick function when clicked', () => {
//     const onClickMock = jest.fn();
//     render(<Button onClick={onClickMock}>Click me</Button>);
//     const buttonElement = screen.getByText('Click me');
//     fireEvent.click(buttonElement);
//     expect(onClickMock).toHaveBeenCalledTimes(1);
//   });

//   it('renders the button with the provided id', () => {
//     render(<Button id="my-button">Button</Button>);
//     const buttonElement = screen.getByTestId('my-button');
//     expect(buttonElement).toBeInTheDocument();
//   });
// });
