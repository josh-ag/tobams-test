import React from 'react';
import {DefaultTheme as NavigatorDefaultTheme} from '@react-navigation/native';
import {
  MD3LightTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {fontConfig, typescale} from './configureFont';

//@combine default theme
export const combineDefaultTheme = merge(
  PaperDefaultTheme,
  NavigatorDefaultTheme,
);

//@@theme
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
