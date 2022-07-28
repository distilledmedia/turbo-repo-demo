export interface ColorTypes {
  PRIMARY_DARKER: string;
  PRIMARY_DARK: string;
  PRIMARY: string;
  PRIMARY_LIGHT: string;
  PRIMARY_LIGHTER: string;
  PRIMARY_LIGHTEST: string;

  GREY_DARKER: string;
  GREY_DARK: string;
  GREY: string;
  GREY_LIGHT: string;
  GREY_LIGHTER: string;
  GREY_LIGHTEST: string;

  SUCCESS_DARKER: string;
  SUCCESS_DARK: string;
  SUCCESS: string;
  SUCCESS_LIGHT: string;
  SUCCESS_LIGHTER: string;
  SUCCESS_LIGHTEST: string;

  ERROR_DARKER: string;
  ERROR_DARK: string;
  ERROR: string;
  ERROR_LIGHT: string;
  ERROR_LIGHTER: string;
  ERROR_LIGHTEST: string;

  WHITE: string;
}

export type Color = keyof ColorTypes;

export interface FontWeightTypes {
  REGULAR: string;
  SEMIBOLD: string;
  BOLD: string;
}
export interface ThemeTypes {
  color: ColorTypes;
  fontWeight: FontWeightTypes;
  fontSize: {
    P14: string;
    P16: string;
    P20: string;
    B10: string;
    B12: string;
    S14: string;
    S16: string;
    T18: string;
    T20: string;
    T24: string;
    T28: string;
    H36: string;
    HM36: string;
    H44: string;
  };
  border: {
    radius: {
      STANDARD: string;
    };
    width: {
      STANDARD: string;
      MEDIUM: string;
    };
  };
  spacing: {
    S2: string;
    S4: string;
    S8: string;
    S12: string;
    M16: string;
    M20: string;
    M24: string;
    M32: string;
    L40: string;
    L48: string;
    L56: string;
    L64: string;
    XL72: string;
    XL80: string;
    XL88: string;
  };
  headerTheme?: {
    name: string;
    headerBackgroundColor: string;
    burgerColor: string;
    navLinkColor: string;
    activeNavLinkColor: string;
    fontSize: string;
    desktopFontSize: string;
    pageBreakpoint: string;
    inModal?: boolean;
  };
  panelTheme?: {
    title: {
      fontSize: string;
      fontWeight: string;
      bottomMargin: string;
    };
    subtitle: {
      fontSize: string;
      fontWeight: string;
      bottomMargin: string;
    };
    panelPadding: string;
    imageBottomMargin?: string;
    closeIconSize?: string;
    closeIconMargin?: string;
    horizontal?: boolean;
    border?: {
      borderColor: string;
      borderStyle: string;
      borderWidth: string;
      borderRadius: string;
    };
  };
}
