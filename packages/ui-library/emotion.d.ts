import '@emotion/react';

declare module '@emotion/react' {
  export interface DefaultTheme {
    name: string;
    colors: {
      [key: string]: string;
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    spacings: {
      [key: string]: string;
    };
  }
}
