import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import Home from './Home';
import Scanning from './Scanning';
import Stats from './Stats';
import Settings from './Settings';
import Topbar from '../components/Topbar';
import SignIn from './SignIn';

const Tab = createBottomTabNavigator();

const Navigation = ({ login }) => {
  if (login !== null) {
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
  else {
    return <SignIn />
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(Navigation);
