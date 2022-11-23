import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home/';
import Historic from '../screens/historic';
import ModalConfirm from '../screens/modalConfirm';
import Chart from '../screens/charts';
import Result from '../screens/result';


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
          animation: 'fade',
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
            animation: 'default',
            headerStyle: { backgroundColor:'#e6e6e6' }
          }}
        />
        <Stack.Screen
          name='modal' component={ModalConfirm}
          options={{
            headerShown: false,
            animation: 'default',
            presentation: 'modal',
            gestureEnabled: true,
          }}
        />
        <Stack.Screen 
          name='chart' component={Chart}
          options={{
            headerShown: true,
            animation: 'default',
            title: "Estatísticas",
            headerStyle: { backgroundColor:'#e6e6e6' }
        }}
        />
        <Stack.Screen 
          name='resultado' component={Result}
          options={{
            headerShown: false,
            animation: 'default',
            title: "Resultado",
            headerStyle: { backgroundColor:'#e6e6e6' }
        }}
        />
    </Stack.Navigator>
  )
};

export default AppRoutes
