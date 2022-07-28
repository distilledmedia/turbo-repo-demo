import styled, { css } from 'styled-components';
import { ButtonStyleProps, ButtonSizes, ButtonTypes } from './Button.types';

export const ButtonText = styled.span<{
  displayTextOnDesktopOnly?: boolean;
}>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  display: ${({ displayTextOnDesktopOnly }) =>
    displayTextOnDesktopOnly ? 'none' : 'inline-block'};

  @media only screen and (min-width: 800px) {
    display: inline-block;
  }
`;

export const StyledButtonCSS = css<ButtonStyleProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  justify-content: center;
  height: ${({ buttonSize }) => (buttonSize === 'X_SMALL' ? '32px' : '40px')};
  padding: ${({ buttonText, buttonTextActive, buttonSize }) =>
    !buttonText && !buttonTextActive
      ? '0 10px'
      : buttonSize === 'X_SMALL'
      ? '0 16px'
      : '0 20px'};
  position: relative;

  @media only screen and (min-width: 800px) {
    height: ${({ buttonSize }) =>
      buttonSize === 'X_SMALL'
        ? '32px'
        : buttonSize === 'SMALL'
        ? '40px'
        : buttonSize === 'MEDIUM'
        ? '52px'
        : buttonSize === 'LARGE' && '65px'};
    padding: ${({ buttonText, buttonTextActive, buttonSize }) =>
      !buttonText && !buttonTextActive
        ? buttonSize === 'SMALL' || buttonSize === 'X_SMALL'
          ? '0 10px'
          : buttonSize === 'MEDIUM'
          ? '0 15px'
          : buttonSize === 'LARGE' && '0 22px'
        : buttonSize === 'X_SMALL'
        ? '0 16px'
        : '0 24px'};

    ${({ buttonType }) =>
      buttonType === 'GHOST'
        ? 'padding: 0; height: auto; line-height: 18px;'
        : ''}
  }

  ${({ buttonType }) =>
    buttonType === 'GHOST' ? 'padding: 0;height: auto; line-height: 18px;' : ''}

  font-weight: ${({ buttonType }) =>
    buttonType === 'PRIMARY' || buttonType === 'SECONDARY'
      ? '700'
      : buttonType === 'TERTIARY'
      ? '600'
      : buttonType === 'GHOST' && '400'};

  color: ${({ buttonType, isActive }) =>
    buttonType === 'PRIMARY'
      ? '#ffffff'
      : buttonType === 'SECONDARY'
      ? '#4170c4'
      : (buttonType === 'TERTIARY' || buttonType === 'GHOST') && isActive
      ? '#4170c4'
      : (buttonType === 'TERTIARY' || buttonType === 'GHOST') && '#333333'};

  text-transform: ${({ buttonType }) =>
    buttonType === 'PRIMARY'
      ? 'uppercase'
      : buttonType === 'SECONDARY'
      ? 'uppercase'
      : 'none'};

  background-color: ${({ buttonType }) =>
    buttonType === 'PRIMARY'
      ? '#4170c4'
      : buttonType === 'GHOST'
      ? 'transparent'
      : '#ffffff'};

  border: ${({ buttonType }) =>
    buttonType === 'PRIMARY'
      ? 'none'
      : buttonType === 'SECONDARY'
      ? '1px solid #4170c4'
      : buttonType === 'TERTIARY'
      ? '1px solid #bbbbbb'
      : buttonType === 'GHOST' && 'none'};

  &:hover {
    background-color: ${({ buttonType }) =>
      buttonType === 'PRIMARY'
        ? '#30528f'
        : buttonType === 'GHOST'
        ? 'transparent'
        : buttonType === 'SECONDARY'
        ? '#e0e8f6'
        : '#ffffff'};

    color: ${({ buttonType }) => buttonType === 'SECONDARY' && '#30528f'};

    border: ${({ buttonType }) =>
      buttonType === 'SECONDARY' && '1px solid #30528f'};
  }

  &:active {
    background-color: ${({ buttonType }) =>
      buttonType === 'PRIMARY'
        ? '#638ace'
        : buttonType === 'SECONDARY' && '#f0f4fa'};

    border: ${({ buttonType }) =>
      buttonType === 'PRIMARY'
        ? 'none'
        : buttonType === 'SECONDARY' && '1px solid #30528f'};
  }

  &:disabled {
    cursor: unset;
    background-color: ${({ buttonType }) =>
      buttonType === 'PRIMARY'
        ? '#cbd8ee'
        : buttonType === 'SECONDARY' && '#ffffff'};

    color: ${({ buttonType }) =>
      buttonType === 'SECONDARY'
        ? '#cbd8ee'
        : buttonType === 'TERTIARY'
        ? '#bbbbbb'
        : buttonType === 'GHOST' && '#bbbbbb'};

    border: ${({ buttonType }) =>
      buttonType === 'SECONDARY'
        ? '1px solid #cbd8ee'
        : buttonType === 'TERTIARY' && '1px solid #dddddd'};
  }
`;

export const StyledIconToggleHolder = styled.div<{
  buttonType: string;
  displayTextOnDesktopOnly?: boolean;
  displayIconOnDesktopOnly?: boolean;
  isActive?: boolean;
  buttonText?: string;
  buttonTextActive?: string;
}>`
  display: ${({ displayIconOnDesktopOnly }) =>
    displayIconOnDesktopOnly ? 'none' : 'flex'};

  svg {
    path {
      fill: ${({ isActive }) => (isActive ? `currentColor` : ``)};
      stroke-width: 1.5px;
    }

    width: ${({ displayTextOnDesktopOnly, buttonText, buttonTextActive }) =>
      !displayTextOnDesktopOnly &&
      (buttonText?.length || buttonTextActive?.length)
        ? '16px'
        : '20px'};
    height: ${({ displayTextOnDesktopOnly, buttonText, buttonTextActive }) =>
      !displayTextOnDesktopOnly &&
      (buttonText?.length || buttonTextActive?.length)
        ? '16px'
        : '20px'};
    margin-right: ${({
      displayTextOnDesktopOnly,
      buttonText,
      buttonTextActive,
    }) =>
      !displayTextOnDesktopOnly &&
      (buttonText?.length || buttonTextActive?.length) &&
      '8px'};

    @media only screen and (min-width: 800px) {
      width: ${({ buttonText, buttonTextActive }) =>
        buttonText?.length || buttonTextActive?.length ? '16px' : '20px'};
      height: ${({ buttonText, buttonTextActive }) =>
        buttonText?.length || buttonTextActive?.length ? '16px' : '20px'};
      margin-right: ${({ buttonText, buttonTextActive }) =>
        (buttonText?.length || buttonTextActive?.length) && '8px'};
    }

    @media only screen and (min-width: 800px) {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 800px) {
    display: flex;
  }
`;

export const StyledButton = styled.button<{
  buttonType: ButtonTypes;
  buttonSize?: ButtonSizes;
  isActive?: boolean;
  fullWidth?: boolean;
  buttonText?: string;
  buttonTextActive?: string;
}>`
  ${StyledButtonCSS};
`;

export const StyledButtonHrefLink = styled.a<{
  buttonType: ButtonTypes;
  buttonSize?: ButtonSizes;
  isActive?: boolean;
  fullWidth?: boolean;
  buttonText?: string;
  buttonTextActive?: string;
  ref: any;
}>`
  ${StyledButtonCSS};
`;

type ButtonContainerProps = {
  fullWidth?: boolean;
};

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: inline-block;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  + .button-container {
    :not(:first-of-type) {
      margin-left: 16px;
    }
  }

  @media only screen and (min-width: 800px) {
    + .button-container {
      :not(:first-of-type) {
        margin-left: 24px;
      }
    }
  }
`;

export const BadgeContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
`;
