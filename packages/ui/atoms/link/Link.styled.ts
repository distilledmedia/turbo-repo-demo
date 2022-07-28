import styled from "styled-components";

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.PRIMARY};
  ${({ theme }) => theme.fontSize.P14};
`
