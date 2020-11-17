import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from './views/Navigation';
import SignIn from './views/SignIn';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
