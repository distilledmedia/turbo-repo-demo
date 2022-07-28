import { ButtonTypes, ButtonSizes, TextFontWeight, TextSize } from 'ui';

export type Panel1Props = {
  fontWeight?: TextFontWeight;
  text: string;
  buttonText: string;
  buttonType: ButtonTypes;
  href:string;
  imgUrl: string;
  imgAlt: string;
  buttonSize?: ButtonSizes;
  textSize?: TextSize;
  textColor?: string;
  textVariant?: any;
  imgWidth?: number;
  imgHeight?: number;
  bgColor?: string
};

export type Panel1IndicatorProps = {
  bgColor: string;
};
