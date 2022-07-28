import * as Styled from './Text.styled';
import * as Types from './Text.types';

export const Text = <T extends React.ElementType = 'div'>({
  children,
  fontWeight,
  size,
  variant,
  textColor,
  ...other
}: Types.TextProps<T>) => {
  const Component = Types.VariantMap[variant];
  return (
    <Styled.Wrapper
      as={Component}
      {...other}
      textColor={textColor}
      fontWeight={fontWeight}
      size={size}
    >
      {children}
    </Styled.Wrapper>
  );
};
