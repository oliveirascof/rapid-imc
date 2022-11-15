import * as React from 'react';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import { View } from 'react-native';


export function Loading() {
return (
    <View style={
        { 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#000' 
        }
    }>
</View>
)
}

export default function App(){

const font = require('./assets/fonts/Montserrat-Regular.ttf')
const [fontsLoaded] = useFonts({font});

return (
    <>
        { fontsLoaded ? <Routes /> : <Loading /> }
    </>
)
}
