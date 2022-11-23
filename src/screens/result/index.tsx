import React, { useCallback, useState }from 'react';
import * as C from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions, Pressable, View, Text, Alert } from 'react-native';
import { VictoryPie } from 'victory-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import uuid from 'react-native-uuid';
import { Modal, Button } from 'react-native-ui-lib';


export default function Result ( {route}: any ) {

  const date = new Date().toLocaleString().split(' ');
  const navigation = useNavigation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [notSaved, setNotSaved] = useState(true);
  const [emptyHistoric, setEmptyHistoric] = useState(true);

  const {height, width} = Dimensions.get("screen");
  const toast = useToast();

  const [data, setData] = useState([

    { y: 2, color: '#003446' },
    { x: "16", y: 5, color: '#0a556e' },
    { x: "17", y: 10, color: '#20728d' },
    { x: "18", y: 20, color: '#00BFFF' },
    { x: "25", y: 15, color: '#00cc00' },
    { x: "30", y: 15, color: '#dfdf31f6' },
    { x: "35", y: 15, color: '#ffa500' },
    { x: "40", y: 2, color: '#FF0000'}
  ])

  function handleHistoricPage () {
    navigation.navigate('historic')
  };

  function openModal () {
    setIsOpenModal(true)
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

async function fetchData () {

    const resp  = await AsyncStorage.getItem('@save:historic')
    const prev = resp ? JSON.parse(resp) : [];
    
    if (prev.length > 0) {
      setEmptyHistoric(true)
    } else {
      setEmptyHistoric(false)
    }

};


useFocusEffect(
  useCallback(() => {
    fetchData();
  },[])
)


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
            <Button 
              onPress={handleHistoricPage}
              label='HISTÓRICO'
              disabled={emptyHistoric}
            />
          </C.BoxViewHorizontalDireito>
        </C.ViewHeaderHorizontal>
        
      <C.ViewVerticalGrafico>
        <C.SecondViewGrafico  >
            <VictoryPie 
              animate
              data={data}
              startAngle={-90}
              endAngle={90}
              innerRadius={50}
              colorScale={ data.map( (element) => element.color ) }
              labels={({ datum }) => datum.x }
              labelPosition={ "startAngle" }
              labelPlacement={ "vertical" }
              style={{ 
                labels: { fill: "black", fontSize: 12, fontWeight: "bold"} 
              }}
            />
            <View style={{marginTop: -170, justifyContent: 'center'}}>
              <Text style={{ fontSize: 22 , textAlign: 'center' }} >
                Seu IMC é...
              </Text>
              <Animatable.Text
                animation="bounceIn"
                delay={300}
                iterationCount={2}
                style={{ fontSize: 60, textAlign: 'center', fontWeight: 'bold'}} >
                {route.params?.data.imc}
              </Animatable.Text>
              

              <Pressable onPress={openModal}>
                <Button onPress={openModal}
                  label={route.params?.data.classificacao} 
                  backgroundColor={route.params?.data.cor} 
                  color={route.params?.data.cor === '#ffff00' ? '#000000' : '#fff'}
                />
                  <Animatable.View 
                    animation="bounce"
                    iterationCount={3}
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
              </Pressable>
              

                <Modal transparent animationType={'slide'} visible={isOpenModal} onRequestClose={ () => setIsOpenModal(false) }>
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

