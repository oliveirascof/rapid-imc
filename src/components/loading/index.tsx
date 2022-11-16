import * as React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';


const View = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #aeaeae90;
`  

export default function Loading (): JSX.Element {
    return ( 
        <View>
            <ActivityIndicator size={100} color='#000' />
        </View>
        
    )
}

