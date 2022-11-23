import React, { useEffect, useState } from 'react';
import * as C from './styles'
import { VictoryChart, VictoryTheme, VictoryLine, VictoryScatter, VictoryArea } from 'victory-native';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome  , MaterialIcons } from '@expo/vector-icons';


export default function Chart () {

    const [data, setData] = useState([]);
    const toast = useToast();
    const {height, width} = Dimensions.get("screen");
    const navigation = useNavigation();

    async function getData () {
        try {
            const response = await AsyncStorage.getItem('@savedata:historic')
            if (response !== null) {
                var newData = JSON.parse(response)
                if (newData.length < 2) {
                    newData.forEach( (temp: any) => {
                        temp['imc'] = String(temp['imc'])
                        temp['peso'] = String(temp['peso'])
                        temp['altura'] = String(temp['altura'])
                        temp['saved'] = String(temp['saved'])
                    });
                } else {
                    newData.forEach( (temp: any) => {
                        temp['imc'] = parseFloat(temp['imc'])
                        temp['peso'] = parseFloat(temp['peso'])
                        temp['altura'] = String(temp['altura'])
                        temp['saved'] = parseInt(temp['saved'])
                    });
                }
                setData(newData)
            } else {
                setData([])
            }

        } 
        catch {
            showToast("Erro ao exibir os dados", "danger")
        }
    };

    function showToast (message: string, type: string) {
        // Message: description 
        // Type: "normal | success | warning | danger | custom"
        toast.show(`${message}`, {
        type: `${type}`,
        placement: "top",
        duration: 4000,
        animationType: "zoom-in",
        textStyle: {fontSize: 20},
        })
    };

    useEffect(() => {
        getData();
    }, [])


    return (
        <C.Container>
            
            <C.ViewChart1>
                
                <VictoryChart  height={height / 2.9} domainPadding={{y: [0, 50]}} theme={VictoryTheme.material}>
                        <C.Label> MEU IMC </C.Label>
                        <VictoryLine
                            animate
                            interpolation='monotoneX'
                            data={data}
                            x={'saved'}
                            y={'imc'}  
                            
                            style={{
                                data: { fill: "#5a99f8", opacity: 0.7 },
                                labels: { fontSize: 12, color: 'blue' },
                                parent: { border: 1 }
                            }}
                        />
                        <VictoryScatter 
                            data={data}
                            x={'saved'}
                            y={'imc'}
                            style={{
                                data: { fill: "#053c8f" }
                            }}
                        />

                </VictoryChart>
                
                
                {/*<VictoryChart  height={height / 2.9} domainPadding={{y: [0, 50]}} theme={VictoryTheme.material}>
                <C.Label> MEU PESO </C.Label>
                        <VictoryLine
                            animate
                            interpolation='monotoneX'
                            data={data}
                            x={'saved'}
                            y={'weight'}

                            style={{
                                data: { fill: "tomato", opacity: 0.7 },
                                labels: { fontSize: 12, color: 'blue' },
                                parent: { border: "1px solid #ccc" },
                            
                                
                            }}
                        />
                        <VictoryScatter 
                            animate
                            data={data}
                            x={'saved'}
                            y={'weight'}
                        />

                </VictoryChart> */}


            </C.ViewChart1>

            
                <C.BottomView>
                    <C.ButtonGoBack onPress={ () => navigation.goBack() }>
                        <AntDesign name="leftcircleo" size={48} color="black" />
                    </C.ButtonGoBack>
                    <C.ButtonHome onPress={ () => navigation.navigate('home') }>
                        <C.TextButton>CALCULADORA</C.TextButton>
                    </C.ButtonHome>
                </C.BottomView>

            
            
        </C.Container>
    )
}