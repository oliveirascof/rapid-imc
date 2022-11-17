import * as React from 'react';
import * as C from './styles';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from '@react-navigation/native';


export default function Historic () {

    const [data, setData] = React.useState([])
    const toast = useToast()
    const { goBack } = useNavigation()

    async function handleFetchData () {
        try {
            const response = await AsyncStorage.getItem('@savedata:historic')
            const previosData = response ? JSON.parse(response) : [];

            setData(() => previosData)
            console.log(previosData)

        } catch {
            toast.show(`Erro o carregar os dados!`, {
                type: `danger`,
                placement: "top",
                duration: 4000,
                animationType: "slide-in",
                textStyle: {fontSize: 25},
            })
        }
        
    };

    async function clearStorage () {
        try {
            await AsyncStorage.clear()
            toast.show(`Dados apagados com sucesso!`, {
                type: `success`,
                placement: "top",
                duration: 4000,
                animationType: "slide-in",
                textStyle: {fontSize: 25},
            })
            setTimeout (() => goBack(), 1000)
            
        } catch {
            toast.show(`Não foi possivel apagar dados!`, {
                type: `danger`,
                placement: "top",
                duration: 4000,
                animationType: "slide-in",
                textStyle: {fontSize: 25},
            })
        }
    }

    React.useEffect(() => {
        handleFetchData();
    }, [])

    return (
        <C.Container>
            <C.VStack>
            <FlatList
                data={data}
                keyExtractor={ (item) => item['id'] }
                renderItem={ ({item}) => 

                <C.FlatListContainer>
                    <C.HStack>
                        <C.IMCText> {item['bmi']} </C.IMCText>
                        <C.NormalText> {item['dateAt']} </C.NormalText>
                    </C.HStack> 

                    <C.HStack>
                        <C.CircleView>
                            <C.Circle newColor={item['newColor']} />
                            <C.NormalText> {item['classific']} </C.NormalText>
                        </C.CircleView>
                        <C.NormalText> {item['dateAt']} </C.NormalText>
                    </C.HStack> 
                </C.FlatListContainer>
                    
                }
            />
            </C.VStack>
            
            <C.BottomV>
                <C.ButtonV onPress={ clearStorage }>
                    <C.TextV>APAGAR DADOS</C.TextV>
                </C.ButtonV>
            </C.BottomV>
        </C.Container>
    )
}