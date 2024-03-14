import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import  { NavigationContainer } from '@react-navigation/native';
import {CreateNativeStackNavigator} from '@react-navigation/native-stack';

conts App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <SplashScreen />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
