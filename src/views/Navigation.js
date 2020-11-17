import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Scanning from './Scanning';
import Stats from './Stats';
import Settings from './Settings';
import Topbar from '../components/Topbar';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Topbar title='Ripceipt'>
    <Tab.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon = '';
            if (route.name === "Home") icon = "home";
            else if (route.name === "Add") icon = "plus";
            else if (route.name === "Stats") icon = "line-chart";
            else icon = "cog";

            return <Icon name={icon} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'rgb(78,107,52)',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Scanning} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    </Topbar>
  );
}

export default Navigation;
