import { TextFontWeight, TextSize, LabelType } from 'ui';

export type Panel2Props = {
  fontWeight?: TextFontWeight;
  textFontWeight?:TextFontWeight;
  text: string;
  heading: string;
  href:string;
  labelText: string;
  labelType: LabelType;
  textSize?: TextSize;
  headingSize?:TextSize;
  textColor?: string;
  textVariant?: any;
};
