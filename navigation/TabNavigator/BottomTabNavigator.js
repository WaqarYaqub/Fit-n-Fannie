import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Home from '../../screens/Home';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconicIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../components/constants/constants';
import Login1 from '../../screens/Login1';
import Profile from '../../screens/Profile';
import MembershipScreen from '../../screens/MemberShip';
import {MEMBERSHIP_SCREEN, PROFILE_SCREEN} from '../routes';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={colors.APP_PRIMARY_COLOR}
      inactiveColor={colors.APP_SECONDARY_COLOR}
      barStyle={{backgroundColor: colors.APP_COLOR_WHITE}}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarIcon: ({color = colors.APP_PRIMARY_COLOR}) => (
            <MaterialCommunityIcon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={Profile}
        options={{
          tabBarIcon: ({color = colors.APP_PRIMARY_COLOR}) => (
            <MaterialIconicIcon name="person" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={MEMBERSHIP_SCREEN}
        component={MembershipScreen}
        options={{
          tabBarIcon: ({color = colors.APP_PRIMARY_COLOR}) => (
            <MaterialIconicIcon name="settings" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
