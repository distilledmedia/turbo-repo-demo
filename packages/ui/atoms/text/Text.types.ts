
export enum TextFontWeight {
  REGULAR = 'REGULAR',
  SEMIBOLD = 'SEMIBOLD',
  BOLD ='BOLD'
}

 export enum TextSize{
  P14 = 'P14',
  P16 = 'P16',
  P20 = 'P20',
  B10 = 'B10',
  B12 = 'B12',
  S14 = 'S14',
  S16 = 'S16',
  T18 = 'T18',
  T20 = 'T20',
  T24 = 'T24',
  T28 = 'T28',
  H36 = 'H36',
  HM36 = 'HM36',
  H44 ='H44'
}

export interface Props<T extends React.ElementType> {
  as?: T;
  children: React.ReactNode;
  textColor?: string;
  fontWeight?: TextFontWeight;
  size?:TextSize;
}

export type TextProps<T extends React.ElementType> = Props<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>;

export const VariantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
} as const;
