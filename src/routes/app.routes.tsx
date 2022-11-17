import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home/';
import Historic from '../screens/historic';

const Stack = createNativeStackNavigator();


const AppRoutes = () => {
  return(
    <Stack.Navigator 
      initialRouteName="home"
      screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#c0c0c0' },
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          animation: 'slide_from_bottom',
      }}
    >
        <Stack.Screen 
          name='home' component={Home}
          options={{
            headerShown: false,
            title: "CALCULE SEU IMC",}}
        />
        <Stack.Screen 
          name='historic' component={Historic}
          options={{
            headerShown: true,
            title: "Histórico",
          }}
          
        />
    </Stack.Navigator>
  )
};

export default AppRoutes
