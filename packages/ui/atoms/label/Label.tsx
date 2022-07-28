import * as Styled from './Label.styled';
import { LabelProps } from './Label.types';

export const Label = (props: LabelProps) => {
  const {
    labelType,
    labelText,
    labelSize = 'large',
    testId,
    iconComponent,
    ...rest
  } = props;
  const UppercaseLabelText = labelText.toUpperCase();

  return (
    <Styled.StyledSpan
      labelSize={labelSize}
      labelType={labelType}
      data-testid={`label-${testId || labelType}`}
      {...rest}
    >
      {iconComponent && (
        <Styled.IconContainer>{iconComponent}</Styled.IconContainer>
      )}
      {UppercaseLabelText}
    </Styled.StyledSpan>
  );
};
