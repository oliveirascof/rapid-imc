import * as React from 'react';
import * as C from './styles';
import { FlatList, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Empty } from '../../components/emptyList';
import { AntDesign, FontAwesome  , MaterialIcons } from '@expo/vector-icons';


export default function Historic (): JSX.Element {

    const [data, setData] = React.useState([])
    const toast = useToast()
    const navigation = useNavigation()

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

    function showInstruction () {
        return (
            toast.show("Pressione para deletar", {
                type: "warning",
                placement: "top",
                duration: 2000,
                animationType: "slide-in",
                textStyle: {fontSize: 20},
            })
        )
        
    }


    function handleModal () {
        navigation.navigate('modal')
    };

    function handleChart () {
        navigation.navigate('chart')
    };


    useFocusEffect( 
        React.useCallback(() => {
            handleFetchData();
        }, [])
    )

    return (
        <C.Container>
            <C.VStack>
            <FlatList
                ListEmptyComponent={<Empty />}
                data={data}
                keyExtractor={ (item) => item['id'] }
                renderItem={ ({item}) =>

                <Pressable onLongPress={handleModal} onPress={showInstruction}>
                <C.FlatListContainer>
                    <C.HStack>
                        <C.IMCText> 
                            {item['imc']} 
                        </C.IMCText>
                        <C.NormalText> 
                            {item['dateAt'][2]}{' '} 
                            {item['dateAt'][1]}{' '} 
                            {item['dateAt'][4]}
                        </C.NormalText>
                    </C.HStack>

                    <C.HStack>
                        <C.ViewHstackLine2>
                            <C.Circle newColor={item['cor']} />
                            <C.NormalText>
                                {item['classificacao']}
                            </C.NormalText> 
                        </C.ViewHstackLine2>
                        <C.ViewTextHour>
                            <C.NormalText>{item['dateAt'][3]}</C.NormalText>
                        </C.ViewTextHour>
                    </C.HStack>
                </C.FlatListContainer>
                </Pressable>

                }
            />


            </C.VStack>

            <C.BottomView>
                <C.ButtonGoBack onPress={ () => navigation.goBack() }>
                <AntDesign name="leftcircleo" size={48} color="black" />
                </C.ButtonGoBack>
                <C.ButtonGoChart onPress={ handleChart }> 
                    <C.TextButton>ESTATÍSTICAS</C.TextButton>
                </C.ButtonGoChart>
            </C.BottomView>

        </C.Container>
    )
}
