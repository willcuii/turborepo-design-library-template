import {createElement, ReactNode, CSSProperties} from 'react';
import styled from 'styled-components';

type DynamicTypographyProps = {
  tag: string;
  children: ReactNode;
};

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
};

const DynamicTypography = styled(
  ({tag, children, ...props}: DynamicTypographyProps) =>
    createElement(tag, props, children),
)`
  font-family: ${({theme}) => theme.typography.fontFamily};
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  font-size: ${({theme}) => theme.typography.fontSize.text}px;
` as React.FC<DynamicTypographyProps> & {defaultProps: {tag: string}};

/**
 * @tag will have default <p> since it'll probably be our most used tag
 * @props have all our CSS
 */
const Typography = ({
  tag = 'p',
  children,
  ...props
}: TypographyProps & CSSProperties) => (
  <DynamicTypography tag={tag} {...props}>
    {children}
  </DynamicTypography>
);

export default Typography;
