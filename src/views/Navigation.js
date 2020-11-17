import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Scanning from './Scanning';
import Stats from './Stats';
import Settings from './Settings';
import Topbar from '../components/Topbar';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Topbar title='Ripceipt'>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Scanning} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    </Topbar>
  );
}

export default Navigation;
