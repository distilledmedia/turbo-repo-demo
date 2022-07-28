import styled from "styled-components";
import {Panel1IndicatorProps} from "./Panel1.types"
import { Text } from 'ui';

export const Panel1Wrapper = styled.section<Panel1IndicatorProps>`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor, theme }) => bgColor && theme.color[bgColor]};
  padding: ${({ theme }) => theme.spacing.M20};
  border-radius: 4px;
  img{
    margin-bottom:${({ theme }) => theme.spacing.M32};
  }
  `;

  export const TextWrapper = styled(Text)`
    margin-bottom:${({ theme }) => theme.spacing.M24};
  `;
