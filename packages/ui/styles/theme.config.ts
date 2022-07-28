import { ThemeTypes } from 'types/theme';

// These tokens align with our Daft design system and should be used whenever possible
// https://www.figma.com/file/JlBzGCOczlsafwseHwIxN7/Daft-Design-System-Web?node-id=0%3A1

export const theme: ThemeTypes = {
  color: {
    PRIMARY_DARKER: '#30528f',
    PRIMARY_DARK: '#3560ab',
    PRIMARY: '#4170c4',
    PRIMARY_LIGHT: '#638ace',
    PRIMARY_LIGHTER: '#cbd8ee',
    PRIMARY_LIGHTEST: '#f0f4fa',

    GREY_DARKER: '#333333',
    GREY_DARK: '#717171',
    GREY: '#999999',
    GREY_LIGHT: '#bbbbbb',
    GREY_LIGHTER: '#dddddd',
    GREY_LIGHTEST: '#f4f4f4',

    SUCCESS_DARKER: '#0a572e',
    SUCCESS_DARK: '#046b34',
    SUCCESS: '#008940',
    SUCCESS_LIGHT: '#54B883',
    SUCCESS_LIGHTER: '#95e5bb',
    SUCCESS_LIGHTEST: '#cff3e0',

    ERROR_DARKER: '#7a1616',
    ERROR_DARK: '#a30a0a',
    ERROR: '#d50000',
    ERROR_LIGHT: '#e57e7e',
    ERROR_LIGHTER: '#fsc4c4',
    ERROR_LIGHTEST: '#fae6e6',

    WHITE: '#ffffff',
  },
  fontWeight: {
    REGULAR: '400',
    SEMIBOLD: '600',
    BOLD: '700',
  },
  fontSize: {
    P14: 'font-size: 14px; line-height: 24px;',
    P16: 'font-size: 16px; line-height: 28px;',
    P20: 'font-size: 20px; line-height: 32px;',
    B10: 'font-size: 10px; line-height: 14px;',
    B12: 'font-size: 12px; line-height: 18px;',
    S14: 'font-size: 14px; line-height: 20px;',
    S16: 'font-size: 16px; line-height: 24px;',
    T18: 'font-size: 18px; line-height: 26px;',
    T20: 'font-size: 20px; line-height: 28px;',
    T24: 'font-size: 24px; line-height: 36px;',
    T28: 'font-size: 28px; line-height: 42px;',
    H36: 'font-size: 36px; line-height: 50px;',
    HM36: 'font-size: 36px; line-height: 44px;',
    H44: 'font-size: 44px; line-height: 54px;',
  },
  border: {
    radius: {
      STANDARD: '4px',
    },
    width: {
      STANDARD: '1px',
      MEDIUM: '2px',
    },
  },
  spacing: {
    S2: '2px',
    S4: '4px',
    S8: '8px',
    S12: '12px',
    M16: '16px',
    M20: '20px',
    M24: '24px',
    M32: '32px',
    L40: '40px',
    L48: '48px',
    L56: '56px',
    L64: '64px',
    XL72: '72px',
    XL80: '80px',
    XL88: '88px',
  },
};
