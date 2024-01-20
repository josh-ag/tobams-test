import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {TabNavigator} from './Navigators/tabNavigator';
import {Providers} from './Providers';
import {theme} from './themeProvider';
import {MenuStack} from './Navigators/menuStack';

const App = () => {
  return (
    <Providers>
      <NavigationContainer theme={theme}>
        <MenuStack />
      </NavigationContainer>
    </Providers>
  );
};

export default App;
