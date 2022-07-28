import styled from 'styled-components';
import {BadgeIndicatorProps} from './Badge.types';

export const BadgeIndicator = styled.div<BadgeIndicatorProps>`
  color: ${({ textColor }) => textColor};
  font-size: 10px;
  font-weight: 600;
  width: 15px;
  height: 15px;
  border-radius: 50%;
      background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
`;
