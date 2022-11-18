import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home/';
import Historic from '../screens/historic';
import ModalConfirm from '../screens/modal';


const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return(
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#c0c0c0' },
          gestureDirection: 'vertical',
          gestureEnabled: true,
          animation: 'slide_from_bottom',
      }}
    >
        <Stack.Screen
          name='home' component={Home}
          options={{
            headerShown: false,
            title: "CALCULE SEU IMC",
          }}
        />
        <Stack.Screen
          name='historic' component={Historic}
          options={{
            headerShown: true,
            title: "Histórico",
            headerStyle: { backgroundColor:'#e6e6e6' }
          }}
        />
        <Stack.Screen
          name='modal' component={ModalConfirm}
          options={{
            headerShown: false,
            animation: 'fade',
            presentation: 'modal',
            gestureEnabled: true,
          }}
        />
    </Stack.Navigator>
  )
};

export default AppRoutes
