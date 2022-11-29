import React, { useCallback, useState }from 'react';
import * as C from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { Dimensions, Pressable, View, Text, Alert } from 'react-native';
import { VictoryPie } from 'victory-native';
import { AntDesign } from '@expo/vector-icons';
import { Modal, Button } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import uuid from 'react-native-uuid';
import RNSpeedometer from 'react-native-speedometer';


export default function Result ( {route}: any ) {

  const date = new Date().toLocaleString().split(' ');
  const navigation = useNavigation();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isClicked, setIsClicked] = useState(1000)

  const [notSaved, setNotSaved] = useState(true);

  const {height, width} = Dimensions.get("screen");
  
  const toast = useToast();

  const [data] = useState([

    { y: 2, color: '#0a556e' },
    { x: "16", y: 5, color: '#20728d' },
    { x: "17", y: 10, color: '#00BFFF' },
    { x: "18", y: 20, color: '#00cc00' },
    { x: "25", y: 15, color: '#dfdf31f6' },
    { x: "30", y: 15, color: '#ffa500' },
    { x: "35", y: 15, color: '#FF0000' },
    { x: "40", y: 2, color: '#FF0000'}
  ])

  function handleHistoricPage () {
    navigation.navigate('historic')
  };

  function openModal () {
    setIsOpenModal(true)
    setIsClicked( 1 )
  };

  function closeModal () {
    setIsOpenModal(false)
  };

  async function handleNew () {
    try {
      var saved =  0
      
      const response = await AsyncStorage.getItem('@savedata:historic') // get data from colection
      const previosData = response ? JSON.parse(response) : [];

      if (previosData.length > 0 ) {
        saved = parseInt(previosData[0]['saved']) + 1
      }

      const newData = {
        id: String(uuid.v4()),
        dateAt: date,
        day: date[2],
        saved,
        ...route.params?.data
      }

      const recoverData = [newData, ...previosData] // saving data
      await AsyncStorage.setItem('@savedata:historic', JSON.stringify(recoverData))

      setNotSaved(false)

      navigation.navigate('chart')
      setTimeout( () => {showToast("Registro adicionado!", "success")},300 )

    } catch {
      showToast("Erro o gravar os dados!", "danger")

    } 
    
};

function confirmSave () {
  Alert.alert(
    'Salvar',
    'Salvar registro de IMC?',
    [
      {text: 'Cancelar'},
      {text: 'Sim', onPress: () => handleNew() }
    ],
    { cancelable: false }
  )
};

function showToast (message: string, type: string) {
  // Message: description 
  // Type: "normal | success | warning | danger | custom"

  toast.show(`${message}`, {
    type: `${type}`,
    placement: "top",
    duration: 3000,
    animationType: "zoom-in",
    textStyle: {fontSize: 20},
  })
};


  return (
    <C.ResultContainer >

        <C.ViewHeaderHorizontal>
          <C.BoxViewHorizontalEsquerdo>
            <C.TextBoxViewHorizontalEsquerdo1 >
              IMC
            </C.TextBoxViewHorizontalEsquerdo1>
            <C.TextBoxViewHorizontalEsquerdo2>
              {date[2]}, {date[1]} {date[4]}
            </C.TextBoxViewHorizontalEsquerdo2>
          </C.BoxViewHorizontalEsquerdo>
          <C.BoxViewHorizontalDireito>
            <C.TouchableHistory 
              onPress={handleHistoricPage}>
                <C.TextButtonHistoric>
                  HISTÓRICO
                </C.TextButtonHistoric>
            </C.TouchableHistory>
          </C.BoxViewHorizontalDireito>
        </C.ViewHeaderHorizontal>
        
      <C.ViewVerticalGrafico>

        <C.SecondViewGrafico  >

        <Pressable onPress={openModal}>
        <VictoryPie 
                width={width}
                animate
                data={data}
                startAngle={-90}
                endAngle={90}
                innerRadius={60}
                colorScale={ data.map( (element) => element.color ) }
                labels={({ datum }) => datum.x }
                labelPosition={ "startAngle" }
                labelPlacement={ "vertical" }
                style={{ 
                  labels: { fill: "black", fontSize: 12, fontWeight: "bold",}
                }}
              />

    <View style={{marginTop: height / -2.5}}>
        <RNSpeedometer
            value={parseInt(route.params?.data.imc)}
            size={height / 2.7}
            minValue={16}
            easeDuration={0}
            maxValue={34}
            imageStyle={{backgroundColor: 'transparent',}}
            labels={[
              {
                labelColor: '#fff',
                activeBarColor: '#00000000',
              }
            ]}
            
          />

            <Text style={{ fontSize: 22 , textAlign: 'center', fontFamily: 'Montserrat-Bold' }} >
              Seu IMC é...
            </Text>
            
            <Animatable.Text
              animation="bounceIn"
              delay={300}
              iterationCount={2}
              style={{ fontSize: 70, textAlign: 'center', fontFamily: 'Montserrat-Bold'}} >
              {route.params?.data.imc}
            </Animatable.Text>
            </View>

            <View style={{ justifyContent: 'center'}}>
        
                  <C.TouchableClassific
                    onPress={openModal}
                    backgroundColor={route.params?.data.cor}
                    >
                      <C.TextButtonClassific
                        color={route.params?.data.cor === '#ffff00' ? '#000000' : '#fff'}>
                        {route.params?.data.classificacao}
                      </C.TextButtonClassific>
                  </C.TouchableClassific>

                  <Animatable.View 
                    animation="bounce"
                    iterationCount={isClicked}
                    delay={3000}
                    style={{
                      marginTop: 10, height: 40, width: 40, alignSelf: 'center', borderWidth: 0.1,
                      justifyContent: 'center',  alignItems: 'center',
                      backgroundColor: route.params?.data.cor, 
                      borderRadius: 50}}>
                  <AntDesign  
                    name="info" 
                    size={30} 
                    color={route.params?.data.cor === '#ffff00' ? '#000000' : '#fff'}
                  />
                </Animatable.View>  

                <Modal 
                  transparent 
                  animationType={'slide'} 
                  visible={isOpenModal} 
                  onRequestClose={ () => setIsOpenModal(false) }>

                  <View style={{ flex: 1,padding: 50, alignItems: 'center', justifyContent: 'center'}}>

                    <View style={{ elevation: 20, shadowColor: '#000000',
                      justifyContent: 'center', height: 'auto', backgroundColor: '#ffffff', padding: 25, borderRadius: 20
                      }} >
                      <View style={{marginBottom: 20}}>
                        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>{route.params?.data.classificacao}</Text>
                      </View>
                      <View style={{marginBottom: 30}}>
                        <Text style={{textAlign: 'justify' }}>{route.params?.data.descricao}</Text>
                      </View>
                      <View>
                        <Button label='Fechar' onPress={closeModal}/>
                      </View>
                    </View>

                  </View>
                </Modal>

            </View>
          </Pressable>
        </C.SecondViewGrafico>
      

        {

        notSaved === true ?

          <C.ButtonSave onPress={confirmSave}>
            <C.TextButtonSave>SALVAR</C.TextButtonSave>
          </C.ButtonSave>
        :
          <C.ButtonSave onPress={() => navigation.navigate('home')}>
            <C.TextButtonSave>CALCULAR NOVAMENTE</C.TextButtonSave>
          </C.ButtonSave>

        }

        </C.ViewVerticalGrafico>

    </C.ResultContainer>
  )
};

