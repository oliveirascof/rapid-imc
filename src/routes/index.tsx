import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import {theme} from '../styles/theme';

import AppRoutes from './app.routes';
import { StatusBar } from 'react-native';


const Routes = () => {
  return(
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={'light-content'}/>
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer> 
    
  )
};

export default Routes

