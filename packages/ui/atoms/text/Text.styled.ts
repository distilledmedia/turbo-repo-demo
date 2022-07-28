import styled from 'styled-components';

type Props = {
  textColor?: string;
  fontWeight?: string;
  size?: string;
};

export const Wrapper = styled.div<Props>`
  color: ${({theme, textColor}) =>
    textColor ? theme.color[textColor] : 'inherit'};
  font-weight: ${({fontWeight, theme}) =>
    fontWeight ? theme.fontWeight[fontWeight] : 'inherit'};
  ${({size, theme}) => size && theme.fontSize[size]}
`;
