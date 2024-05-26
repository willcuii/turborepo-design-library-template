export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" {...other}>
      {children}
    </button>
  );
}


Button.displayName = 'Button';
