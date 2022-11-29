import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../config/styles/theme';
import { StatusBar } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications'
import { useFonts } from 'expo-font';

import AppRoutes from './app.routes';
import Loading from '../components/loading';


const Routes = () => {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'RubikDistressed-Regular': require('../../assets/fonts/RubikDistressed-Regular.ttf')
  });

  return(
    <NavigationContainer>
      <ThemeProvider theme={theme} >
        <ToastProvider>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#c0c0c0'}/>
          
          { fontsLoaded ? <AppRoutes /> : <Loading /> }

        </ToastProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
};

export default Routes

