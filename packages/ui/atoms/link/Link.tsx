import * as Styled from './Link.styled';
import { LinkProps } from './Link.types';
import NextLink from 'next/link';

export const Link = ({ children, href }: LinkProps) => (
  <NextLink href={href} passHref={true}>
    <Styled.StyledLink>{children}</Styled.StyledLink>
  </NextLink>
);
