import * as React from 'react';
import * as C from './styles';
import { FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";
import { useNavigation, useFocusEffect } from '@react-navigation/native';


export default function Historic () {

    const [data, setData] = React.useState([])
    const toast = useToast()
    const { navigate, goBack } = useNavigation()

    async function handleFetchData () {
        try {
            const response = await AsyncStorage.getItem('@savedata:historic');
            const previosData = response ? JSON.parse(response) : [];
            setData(() => previosData);

        } catch {
            toast.show(`Erro o carregar os dados!`, {
                type: `danger`,
                placement: "top",
                duration: 3000,
                animationType: "slide-in",
                textStyle: {fontSize: 20},
            })
        }

    };

    function handleModal () {
      navigate('modal')
    };

    function ListEmpty () {
      return (
        <Text style={{fontSize: 30}} >Sem items</Text>
      )
    }

    useFocusEffect( React.useCallback(() => {
      handleFetchData();
    }, [])
    )

    return (
        <C.Container>
            <C.VStack>
            <FlatList
                ListEmptyComponent={<ListEmpty />}
                data={data}
                keyExtractor={ (item) => item['id'] }
                renderItem={ ({item}) =>

                <C.FlatListContainer>
                    <C.HStack>
                        <C.IMCText> 
                            {item['bmi']} 
                        </C.IMCText>
                        <C.NormalText> 
                            {item['dateAt'][2]}, {item['dateAt'][1]}, {item['dateAt'][4]} 
                        </C.NormalText>
                    </C.HStack>

                    <C.HStack>
                        <C.ViewHstackLine2>
                            <C.Circle newColor={item['newColor']} />
                            <C.NormalText>
                                {item['classific']} 
                            </C.NormalText>
                        </C.ViewHstackLine2>
                        <C.NormalText> 
                            {item['dateAt'][3]} 
                        </C.NormalText>
                    </C.HStack>
                </C.FlatListContainer>

                }
            />
            </C.VStack>


            <C.BottomV>
                <C.ButtonV onPress={ handleModal }>
                    <C.TextV>APAGAR REGISTROS</C.TextV>
                </C.ButtonV>
            </C.BottomV>



        </C.Container>
    )
}
