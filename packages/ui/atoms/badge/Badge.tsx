import * as Styled from './Badge.styled';
import * as Types from './Badge.types';

export const Badge = ({
  ariaLabel,
  backgroundColor,
  children,
  dataTestId,
  textColor,
}: Types.BadgeProps) =>
  children ? (
    <Styled.BadgeIndicator
      aria-label={ariaLabel}
      data-testid={dataTestId}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {children}
    </Styled.BadgeIndicator>
  ) : null;
