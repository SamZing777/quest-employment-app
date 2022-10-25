import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/splashScreen';
import HomeScreen from '../screens/home';
import BottomTabs from './bottomTab';

const Stack = createNativeStackNavigator()

const ScreenStack = () =>{
    return(
        <Stack.Navigator initialRouteName="Splash Screen">
            <Stack.Screen name="Splash Screen" component={SplashScreen}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
              <Stack.Screen name="Home" component={HomeScreen}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
            {/* <Stack.Screen name="Bottom Tab" component={BottomTabs}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} /> */}
        </Stack.Navigator>
    )
}

export default ScreenStack;

