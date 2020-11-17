import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './views/Navigation';

const App = () => {
  return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
  );
};

export default App;
