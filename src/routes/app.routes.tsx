import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home/';

const {Navigator, Screen} = createNativeStackNavigator();

const AppRoutes = () => {
  return(
    <Navigator>
        <Screen options={{headerShown: false}}
          name='home' component={Home}/>
    </Navigator>
  )
};

export default AppRoutes
