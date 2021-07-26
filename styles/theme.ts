const colors = {
  primary: {
    '01': '#3772FF',
    '02': '#9757D7',
    '03': '#EF466F',
    '04': '#45B26B',
  },
  secondary: {
    '01': '#4BC9F0',
    '02': '#E4D7CF',
    '03': '#FFD166',
    '04': '#CDB4DB',
  },
  neutrals: {
    '01': '#141416',
    '02': '#23262F',
    '03': '#353945',
    '04': '#777E90',
    '05': '#B1B5C3',
    '06': '#E6E8EC',
    '07': '#F4F5F6',
    '08': '#FCFCFD',
    '09': '#FFFFFF',
  },
};

const lightTheme = {
  textColor: colors.neutrals['02'],
  backgroundColor: colors.neutrals['08'],
  borderColor: colors.neutrals['06'],
  button: {
    textColor: colors.neutrals['02'],
    textHover: colors.neutrals['08'],
    backgroundColor: colors.neutrals['02'],
    borderColor: colors.neutrals['06'],
  },
  circleButton: {
    textColor: colors.neutrals['08'],
    backgroundColor: colors.neutrals['02'],
  },
};

const darkTheme = {
  textColor: colors.neutrals['08'],
  backgroundColor: colors.neutrals['01'],
  borderColor: colors.neutrals['03'],
  button: {
    textColor: colors.neutrals['08'],
    textHover: colors.neutrals['02'],
    backgroundColor: colors.neutrals['08'],
    borderColor: colors.neutrals['04'],
  },
  circleButton: {
    textColor: colors.neutrals['04'],
    backgroundColor: colors.neutrals['08'],
  },
};

export type ThemeType = typeof lightTheme;
export { colors, lightTheme, darkTheme };
