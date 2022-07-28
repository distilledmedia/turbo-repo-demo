import { Img, Button, TextFontWeight } from 'ui';
import { Panel1Props } from './Panel1.types';
import * as Styled from './Panel1.styled';

export const Panel1 = ({
  bgColor = 'WHITE',
  fontWeight = TextFontWeight.BOLD,
  text,
  textSize,
  textVariant,
  textColor,
  buttonText,
  buttonType,
  buttonSize,
  href,
  imgUrl,
  imgAlt,
  imgWidth,
  imgHeight,
}: Panel1Props) => {
  return (
    <Styled.Panel1Wrapper bgColor={bgColor}>
      <Img src={imgUrl} alt={imgAlt} width={imgWidth} height={imgHeight} />
      <Styled.TextWrapper
        fontWeight={fontWeight}
        size={textSize}
        as={textVariant}
        textColor={textColor}
      >
        {text}
      </Styled.TextWrapper>
      <Button
        buttonText={buttonText}
        buttonType={buttonType}
        buttonSize={buttonSize}
        href={href}
      />
    </Styled.Panel1Wrapper>
  );
};
