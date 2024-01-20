import React from 'react';
import {
  //   DarkTheme as NavigatorDarkTheme,
  DefaultTheme as NavigatorDefaultTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme as PaperDefaultTheme,
  //   MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import merge from 'deepmerge';
import {fontConfig, typescale} from './configureFont';

// @create adaptive theme for react-navigation
const {LightTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigatorDefaultTheme,
});

//@combine default theme
export const combineDefaultTheme = merge(PaperDefaultTheme, LightTheme);

// @combine dark theme
// export const combineDarkTheme = merge(PaperDarkTheme, NavigatorDarkTheme);

export const theme = {
  ...combineDefaultTheme,
  fonts: fontConfig,
  typescale,
  roundness: 12,
  version: 3,
  isV3: true,
  mode: 'adaptive',
  iconSize: 24,
  brand: '#DB3C25',
  border: '#E1E5E9',
  colors: {
    ...combineDefaultTheme.colors,
  },
};

// ThemeProvider:@provides app theme
export const ThemeProvider = ({children}: {children: React.ReactNode}) => (
  <PaperProvider theme={theme}>{children}</PaperProvider>
);
