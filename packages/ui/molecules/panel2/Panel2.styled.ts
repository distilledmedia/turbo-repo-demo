import styled from "styled-components";
import { Label } from "ui";

export const Panel2Wrapper = styled.section`
  width:100%;
  padding: ${({ theme }) => theme.spacing.M32};
  border-radius: 4px;
  background: ${({ theme }) => theme.color.WHITE};
`;

export const HeadingWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.M16};
`;

export const LabelWrapper = styled(Label)`
  margin-top: ${({ theme }) => theme.spacing.S8};
`;
