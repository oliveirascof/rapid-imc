import * as React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

const ViewFlat = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Text = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`

const test = [
    { id: '1', name: 'Recente 1'},
    { id: '2', name: 'Recente 2'}
]

export default function List () {
    return (
        <ViewFlat>
            <FlatList
                data={test}
                keyExtractor={ (item) => item.id }
                renderItem={ ({item}) => <Text > {item.name} </Text> }
            />
        </ViewFlat>
    )
}

