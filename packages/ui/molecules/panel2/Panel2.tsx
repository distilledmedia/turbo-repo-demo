import { Text, TextFontWeight, Link } from 'ui';
import { Panel2Props } from './Panel2.types';
import * as Styled from './Panel2.styled';

export const Panel2 = ({
  fontWeight = TextFontWeight.BOLD,
  text,
  textSize,
  textFontWeight,
  textVariant,
  textColor,
  heading,
  headingSize,
  href,
  labelText,
  labelType,
}: Panel2Props) => {
  return (
    <Styled.Panel2Wrapper>
      <Styled.HeadingWrapper>
        <Text
          fontWeight={fontWeight}
          size={headingSize}
          as={textVariant}
          textColor={textColor}
        >
          {heading}
        </Text>
        <Styled.LabelWrapper
          labelText={labelText}
          labelType={labelType}
          labelSize="small"
        />
      </Styled.HeadingWrapper>
      <Text
        fontWeight={textFontWeight}
        size={textSize}
        as={textVariant}
        textColor={textColor}
      >
        {text}
      </Text>
      <Link href={href}>Learn more</Link>
    </Styled.Panel2Wrapper>
  );
};
