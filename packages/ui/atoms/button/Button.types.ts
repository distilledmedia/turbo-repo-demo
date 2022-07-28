export enum SemanticButtonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export enum ButtonTypes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  GHOST = 'GHOST',
}

export enum ButtonSizes {
  X_SMALL = 'X_SMALL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export type ButtonStyleProps = {
  buttonType: ButtonTypes;
  buttonSize?: ButtonSizes;
  buttonText?: string;
  buttonTextActive?: string;
  isActive?: boolean;
  fullWidth?: boolean;
};

export type ButtonProps = {
  type?: SemanticButtonTypes;
  buttonText?: string;
  buttonTextActive?: string;
  buttonType: ButtonTypes;
  buttonSize?: ButtonSizes;
  badgeNumber?: number;
  isActive?: boolean;
  iconName?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  name?: string;
  value?: string;
  isLoading?: boolean;
  displayTextOnDesktopOnly?: boolean;
  displayIconOnDesktopOnly?: boolean;
  renderLoading?: () => JSX.Element;
  onClick?(
    event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ): void;
  onFocus?(): void;
  onBlur?(): void;
  onKeyPress?(
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
  ): void;
  onKeyUp?(
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
  ): void;
  onKeyDown?(
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
  ): void;
  onMouseEnter?(): void;
  onTouchStart?(): void;
  href?: string;
  target?: string;
  rel?: string;
  classNames?: string;
};
