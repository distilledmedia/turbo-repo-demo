import styled from 'styled-components';

const getLabelType = (labelType: string, theme: any) => {
  switch (labelType) {
    case 'primary':
      return `
        color: ${theme.color.GREY_DARKER};
        border: 1px solid ${theme.color.GREY_DARKER};
        `;
    case 'secondary':
      return `
        color: ${theme.color.PRIMARY};
        border: 1px solid ${theme.color.PRIMARY};
        `;
    case 'alert':
      return `
        color: ${theme.color.ERROR};
        border: 1px solid ${theme.color.ERROR};
        `;
    case 'success':
      return `
        color: ${theme.color.SUCCESS};
        border: 1px solid ${theme.color.SUCCESS};
        `;
    case 'success_light':
      return `
        color: ${theme.color.SUCCESS_LIGHT};
        border: 1px solid ${theme.color.SUCCESS_LIGHT};
        `;
    case 'disabled':
      return `
        color: ${theme.color.GREY_DARK};
        border: 1px solid ${theme.color.GREY_DARK};
        `;
    default:
      return '';
  }
};

export const StyledSpan = styled.span<{ labelType: string; labelSize: string }>`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.fontWeight.SEMIBOLD};
  border-radius: ${({ theme }) => theme.spacing.S4};
  height: ${({ theme }) => theme.spacing.M20};
  padding: 0px ${({ theme }) => theme.spacing.S8};
  background: ${({ theme }) => theme.color.WHITE};

  ${({ theme }) => theme.fontSize.B10}
${({ labelType, theme }) => getLabelType(labelType, theme)};

  @media only screen and (min-width: 600px) {
    ${({ labelSize, theme }) => {
      switch (labelSize) {
        case 'xsmall':
          return `
          vertical-align: text-bottom;
          height: 16px;  
          padding: 0px ${theme.spacing.S4}; 
          ${theme.fontSize.B10}`;

        case 'small':
          return `
          vertical-align: text-bottom;
          height: ${theme.spacing.M20};  
          padding: 0px ${theme.spacing.S8}; 
          ${theme.fontSize.B10}`;

        case 'large':
          return `
          vertical-align: bottom;;
          height: 30px;  
          padding: 0px 10px;  
          ${theme.fontSize.P14}`;
      }
    }};
  }
`;

export const IconContainer = styled.span`
  display: flex;
  margin-right: ${({ theme }) => theme.spacing.S4};
  align-items: center;
`;
