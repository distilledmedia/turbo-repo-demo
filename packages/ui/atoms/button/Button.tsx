import { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import * as Styled from './Button.styled';
import {
  AlertsIcon,
  BurgerIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  EmailIcon,
  FacebookIcon,
  FiltersIcon,
  FlagIcon,
  HeartIcon,
  InformationIcon,
  LinkIcon,
  LogoutIcon,
  MapPinIcon,
  NewTabIcon,
  PlusIcon,
  PrintIcon,
  SearchIcon,
  ShareIcon,
  SwitchIcon,
  TwitterIcon,
  VideoIcon,
  VrIcon,
  WhatsappIcon,
  RotateIcon,
  TrashIcon,
} from '@dsch/icons';

import { Badge } from '../badge/Badge';

export const Icons: { [key: string]: JSX.Element } = {
  ALERT: <AlertsIcon />,
  BURGER: <BurgerIcon />,
  CHEVRON: <ChevronDownIcon />,
  CHEVRON_RIGHT: <ChevronRightIcon />,
  CHEVRON_LEFT: <ChevronLeftIcon />,
  CLOSE: <CloseIcon />,
  EMAIL: <EmailIcon />,
  FILTERS: <FiltersIcon />,
  FLAG: <FlagIcon />,
  FACEBOOK: <FacebookIcon />,
  HEART: <HeartIcon />,
  LINK: <LinkIcon />,
  LOGOUT: <LogoutIcon />,
  MAP_PIN: <MapPinIcon />,
  NEW_TAB: <NewTabIcon />,
  PLUS: <PlusIcon />,
  PRINT: <PrintIcon />,
  SEARCH: <SearchIcon />,
  SHARE: <ShareIcon />,
  VIDEO: <VideoIcon />,
  VR: <VrIcon />,
  SWITCH: <SwitchIcon />,
  InformationIcon: <InformationIcon />,
  TWITTER: <TwitterIcon />,
  WHATSAPP: <WhatsappIcon />,
  ROTATE: <RotateIcon />,
  TRASH: <TrashIcon />,
};

export const Button = forwardRef((props: ButtonProps, ref) => {
  const {
    buttonText,
    displayTextOnDesktopOnly,
    buttonTextActive,
    buttonType,
    buttonSize,
    isActive,
    iconName,
    fullWidth,
    isLoading,
    onClick,
    onFocus,
    onBlur,
    renderLoading,
    href,
    displayIconOnDesktopOnly,
    badgeNumber,
    id,
    classNames,
    ...rest
  } = props;
  return (
    <Styled.ButtonContainer
      fullWidth={fullWidth}
      className={`button-container${classNames ? ` ${classNames}` : ''}`}
    >
      {href ? (
        <Styled.StyledButtonHrefLink
          buttonType={buttonType}
          isActive={isActive}
          buttonSize={buttonSize}
          aria-label={buttonText || iconName}
          fullWidth={fullWidth}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          href={href}
          buttonText={buttonText}
          buttonTextActive={buttonTextActive}
          ref={ref}
          id={id}
          {...rest}
        >
          {isLoading && renderLoading ? (
            renderLoading()
          ) : (
            <>
              {iconName && (
                <Styled.StyledIconToggleHolder
                  buttonText={buttonText}
                  buttonType={buttonType}
                  buttonTextActive={buttonTextActive}
                  displayTextOnDesktopOnly={displayTextOnDesktopOnly}
                  displayIconOnDesktopOnly={displayIconOnDesktopOnly}
                  isActive={isActive}
                >
                  {Icons[iconName]}
                </Styled.StyledIconToggleHolder>
              )}
              <Styled.ButtonText
                displayTextOnDesktopOnly={displayTextOnDesktopOnly}
                id={id}
              >
                {buttonTextActive && isActive ? buttonTextActive : buttonText}
              </Styled.ButtonText>
              {badgeNumber && (
                <Styled.BadgeContainer>
                  <Badge
                    ariaLabel={`badge-text-${badgeNumber}`}
                    backgroundColor="#4170c4"
                    textColor="#ffffff"
                    dataTestId={`badge-${badgeNumber}`}
                  >
                    {badgeNumber}
                  </Badge>
                </Styled.BadgeContainer>
              )}
            </>
          )}
        </Styled.StyledButtonHrefLink>
      ) : (
        <Styled.StyledButton
          buttonType={buttonType}
          isActive={isActive}
          buttonSize={buttonSize}
          aria-label={buttonText || iconName}
          fullWidth={fullWidth}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          buttonText={buttonText}
          buttonTextActive={buttonTextActive}
          id={id}
          {...rest}
        >
          {isLoading && renderLoading ? (
            renderLoading()
          ) : (
            <>
              {iconName && (
                <Styled.StyledIconToggleHolder
                  buttonText={buttonText}
                  buttonType={buttonType}
                  buttonTextActive={buttonTextActive}
                  displayTextOnDesktopOnly={displayTextOnDesktopOnly}
                  displayIconOnDesktopOnly={displayIconOnDesktopOnly}
                  isActive={isActive}
                >
                  {Icons[iconName]}
                </Styled.StyledIconToggleHolder>
              )}{' '}
              <Styled.ButtonText
                displayTextOnDesktopOnly={displayTextOnDesktopOnly}
                id={id}
              >
                {buttonTextActive && isActive ? buttonTextActive : buttonText}
              </Styled.ButtonText>
              {badgeNumber && (
                <Styled.BadgeContainer>
                  <Badge
                    ariaLabel={`badge-text-${badgeNumber}`}
                    backgroundColor="#4170c4"
                    textColor="#ffffff"
                    dataTestId={`badge-${badgeNumber}`}
                  >
                    {badgeNumber}
                  </Badge>
                </Styled.BadgeContainer>
              )}
            </>
          )}
        </Styled.StyledButton>
      )}
    </Styled.ButtonContainer>
  );
});
