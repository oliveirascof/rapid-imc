import * as React from 'react';
import * as C from './styles';

import List from '../../components/flatlist';


export default function Historic () {
    return (
        <C.Container >
            <C.ContainerText>
                <List />
            </C.ContainerText>
        </C.Container>
    )
}