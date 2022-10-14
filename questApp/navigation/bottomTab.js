import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from '@svgr-iconkit/material-design';

import HomeScreen from '../screens/home';
import MessageScreen from '../screens/message';
import SettingsScreen from '../screens/settings';
import WorkerScreen from '../screens/worker';
import SupportScreen from '../screens/support';


import { Colors, Sizes } from '../constants/theme';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () =>{
    return(
        <Tab.Navigator initialRouteName="Home"
            activeColor="#1D3A70"
            inactiveColor="#ccc"
            barStyle={{ backgroundColor: Colors.primary, paddingBottom: 10 }}>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={Colors.light} size={Sizes.medium} />
                )
              }} />
              <Tab.Screen name="Message" component={MessageScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="message" color={Colors.light} size={Sizes.medium} />
                )
              }} />
              <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="settings" color={Colors.light} size={Sizes.medium} />
                )
              }} />
              <Tab.Screen name="Worker" component={WorkerScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="work" color={Colors.light} size={Sizes.medium} />
                )
              }} />
              <Tab.Screen name="Support" component={SupportScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="support-agent" color={Colors.light} size={Sizes.medium} />
                )
              }} />
        </Tab.Navigator>
    )
}

export default BottomTabs;

