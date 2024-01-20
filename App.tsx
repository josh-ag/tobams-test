import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './Navigators/tabNavigator';
import {Providers} from './Providers';
import {theme} from './themeProvider';

const App = () => {
  return (
    <Providers>
      <NavigationContainer theme={theme}>
        <TabNavigator />
      </NavigationContainer>
    </Providers>
  );
};

export default App;
