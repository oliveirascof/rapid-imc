import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import {theme} from '../styles/theme';

import AppRoutes from './app.routes';

const Routes = () => {
  return(
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
  )
};

export default Routes

