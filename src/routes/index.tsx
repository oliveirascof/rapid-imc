import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { theme } from '../styles/theme';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { ToastProvider } from 'react-native-toast-notifications'

import AppRoutes from './app.routes';
import Loading from '../components/loading';


const Routes = () => {

  const fonts = require('../../assets/fonts/Montserrat-Regular.ttf')
  const [fontsLoaded] = useFonts({font: fonts});

  return(
    <NavigationContainer>
      <StyledThemeProvider theme={theme} >
        <ToastProvider>
          <StatusBar barStyle={'default'}/>
          { fontsLoaded ? <AppRoutes /> : <Loading /> }
        </ToastProvider>
      </StyledThemeProvider>
    </NavigationContainer>
  )
};

export default Routes

