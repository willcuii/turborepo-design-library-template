import {css} from '@emotion/react';
import {media} from '../../utils/breakpoints';
import {fonts} from '@/tokens/fonts/fonts';
import {spacings} from '@/tokens/spacing/spacings';

export const globalStyles = css`
  @font-face {
    font-family: 'sofia-pro';
    src:
      url('https://use.typekit.net/af/2e2409/00000000000000007735f990/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/2e2409/00000000000000007735f990/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3')
        format('woff'),
      url('https://use.typekit.net/af/2e2409/00000000000000007735f990/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3')
        format('opentype');
    font-display: swap;
    font-style: normal;
    font-weight: 300;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'sofia-pro';
    src:
      url('https://use.typekit.net/af/b718ff/00000000000000007735f98d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/b718ff/00000000000000007735f98d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('woff'),
      url('https://use.typekit.net/af/b718ff/00000000000000007735f98d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('opentype');
    font-display: swap;
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'sofia-pro';
    src:
      url('https://use.typekit.net/af/19ced7/00000000000000007735f992/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/19ced7/00000000000000007735f992/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('woff'),
      url('https://use.typekit.net/af/19ced7/00000000000000007735f992/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('opentype');
    font-display: swap;
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'sofia-pro';
    src:
      url('https://use.typekit.net/af/262452/00000000000000007735f99a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/262452/00000000000000007735f99a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('woff'),
      url('https://use.typekit.net/af/262452/00000000000000007735f99a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('opentype');
    font-display: swap;
    font-style: normal;
    font-weight: 600;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'sofia-pro';
    src:
      url('https://use.typekit.net/af/5d97ff/00000000000000007735f999/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/5d97ff/00000000000000007735f999/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('woff'),
      url('https://use.typekit.net/af/5d97ff/00000000000000007735f999/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('opentype');
    font-display: swap;
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'sofia-pro';
    src:
      url('https://use.typekit.net/af/773a22/00000000000000007735f996/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/773a22/00000000000000007735f996/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3')
        format('woff'),
      url('https://use.typekit.net/af/773a22/00000000000000007735f996/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3')
        format('opentype');
    font-display: swap;
    font-style: normal;
    font-weight: 900;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    font-display: swap;
    font-style: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    font-display: swap;
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    font-display: swap;
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    font-display: swap;
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    font-display: swap;
    font-style: normal;
    font-weight: 900;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
    ${media.desktopSmall} {
      font-size: 87.5%;
    }
    ${media.tabletLandscape} {
      font-size: 75%;
    }
    ${media.tabletPortrait} {
      overflow-x: hidden;
    }
  }
  body {
    font-family: 'sofia-pro', san-serif;
    line-height: normal;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    color: inherit;
    font-size: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }
  img,
  svg {
    border: 0;
    display: block;
    height: auto;
  }
  a {
    &:link,
    &:visited {
      text-decoration: none;
    }
    &:hover,
    &:active {
      outline: 0;
    }
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  audio,
  canvas,
  video {
    display: inline-block;
    max-width: 100%;
    zoom: 1;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 6px;
  }
  h1 {
    font-size: ${fonts.size.h1}px;
    font-weight: ${fonts.weight.bold};
    margin-bottom: ${spacings.md};
  }
  h2 {
    font-size: ${fonts.size.h2}px;
    font-weight: ${fonts.weight.bold};
    margin-bottom: ${spacings.sm};
  }
  h3 {
    font-size: ${fonts.size.h3}px;
    font-weight: ${fonts.weight.bold};
    margin-bottom: ${spacings.xs};
  }
  h4 {
    font-size: ${fonts.size.h4}px;
    font-weight: ${fonts.weight.bold};
    margin-bottom: ${spacings['2xs']};
  }
  h5 {
    font-size: ${fonts.size.h5}px;
    font-weight: ${fonts.weight.bold};
    margin-bottom: ${spacings['2xs']};
  }
  h6 {
    font-size: ${fonts.size.h6}px;
    font-weight: ${fonts.weight.bold};
  }
  p {
    font-size: ${fonts.size.text}px;
    font-weight: ${fonts.weight.regular};
  }
  a {
    text-decoration: none;
  }
  span {
    font-size: ${fonts.size.text};
    font-weight: ${fonts.weight.regular};
  }
`;
