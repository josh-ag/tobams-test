import React from 'react';
import {ContextProvider} from './context/appContext';
import {ThemeProvider} from 'react-native-paper';

// App Providers:@provides app store and theme
export const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ContextProvider>
  );
};
