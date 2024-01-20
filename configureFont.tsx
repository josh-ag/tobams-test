import {Platform} from 'react-native';
import {configureFonts} from 'react-native-paper';

export const fonts = {
  web: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: '100',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: '100',
    },
  },
  default: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: 'normal',
    },
  },
};

const typeface = {
  brandRegular: Platform.select({
    web: 'Poppins-Regular',
    ios: 'Poppins-Regular',
    default: 'Poppins-Regular',
  }),

  weightRegular: '400',
  plainMedium: Platform.select({
    web: 'Poppins-Bold',
    ios: 'Poppins-Bold',
    default: 'Poppins-Bold',
  }),
  weightMedium: '600',
};

const regularType = {
  fontFamily: typeface.brandRegular,
  letterSpacing: 0,
  fontWeight: typeface.weightRegular,
};

const mediumType = {
  fontFamily: typeface.plainMedium,
  letterSpacing: 0.15,
  fontWeight: typeface.weightMedium,
};

export const typescale = {
  displayLarge: {
    ...regularType,
    lineHeight: 64,
    fontSize: 57,
  },
  displayMedium: {
    ...regularType,
    lineHeight: 52,
    fontSize: 45,
  },
  displaySmall: {
    ...regularType,
    lineHeight: 44,
    fontSize: 36,
  },

  headlineLarge: {
    ...regularType,
    lineHeight: 40,
    fontSize: 32,
  },
  headlineMedium: {
    ...regularType,
    lineHeight: 36,
    fontSize: 28,
  },
  headlineSmall: {
    ...regularType,
    lineHeight: 32,
    fontSize: 24,
  },

  titleLarge: {
    ...regularType,
    lineHeight: 28,
    fontSize: 22,
  },
  titleMedium: {
    ...mediumType,
    lineHeight: 24,
    fontSize: 16,
  },
  titleSmall: {
    ...mediumType,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 14,
  },

  labelLarge: {
    ...mediumType,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 14,
  },
  labelMedium: {
    ...mediumType,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 12,
  },
  labelSmall: {
    ...mediumType,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 11,
  },

  bodyLarge: {
    ...mediumType,
    fontWeight: typeface.weightRegular,
    fontFamily: typeface.brandRegular,
    lineHeight: 24,
    fontSize: 16,
  },

  bodyMedium: {
    ...mediumType,
    fontWeight: typeface.weightRegular,
    fontFamily: typeface.brandRegular,
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 14,
  },

  bodySmall: {
    ...mediumType,
    fontWeight: typeface.weightRegular,
    fontFamily: typeface.brandRegular,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
  },
};

export const fontConfig = configureFonts({config: fonts});
