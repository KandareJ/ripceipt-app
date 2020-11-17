import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './views/Navigation';
import SignIn from './views/SignIn';

const App = () => {
  return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
  );
};

export default App;
