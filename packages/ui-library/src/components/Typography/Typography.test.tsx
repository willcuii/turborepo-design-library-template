// import React from 'react';
// import {describe, expect, it} from 'vitest';
// import {render} from '@testing-library/react';
// import {DynamicTypography} from './Typography';

// describe('DynamicTypography', () => {
//   it('renders the correct tag and content', () => {
//     const {getByText} = render(
//       <DynamicTypography tag="h1">Hello, World!</DynamicTypography>,
//     );

//     const headingElement = getByText('Hello, World!');
//     expect(headingElement.tagName).toBe('H1');
//   });

//   it('applies the correct styles', () => {
//     const {container} = render(
//       <DynamicTypography tag="p">Lorem ipsum dolor sit amet</DynamicTypography>,
//     );

//     const paragraphElement = container.querySelector('p');
//     expect(paragraphElement).tostyle(`
//       font-family: Arial, sans-serif;
//       font-weight: 400;
//       font-size: 16px;
//     `);
//   });
// });

// https://stackoverflow.com/questions/76588750/how-to-configure-vitest-and-styled-components
