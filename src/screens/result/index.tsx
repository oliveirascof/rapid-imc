import React, { useCallback, useState }from 'react';
import * as C from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { Dimensions, Pressable, View, Text, Alert, StatusBar, TouchableOpacity } from 'react-native';
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
    { x: "35", y: 15, color: '#fd4646' },
    { x: "39", y: 2, color: '#FF0000'}
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
        day: `${date[2] + '/' + date[1]}`,
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
    <Animatable.View
      animation='bounceInRight'
      duration={1000}
      delay={200}
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
      }} >

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
              style={{elevation: 10, shadowColor: '#000'}}
              onPress={handleHistoricPage}>
                <C.TextButtonHistoric>
                  HISTÓRICO
                </C.TextButtonHistoric>
            </C.TouchableHistory>
          </C.BoxViewHorizontalDireito>
        </C.ViewHeaderHorizontal>
        
      <C.ViewVerticalGrafico>

        <C.SecondViewGrafico  >

        <TouchableOpacity onPress={openModal}>
        <VictoryPie 
                width={width}
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
                  labels: { fill: "black", fontSize: 12, fontWeight: "bold",}
                }}
              />

    <View style={{marginTop: height / -2.5}}>
        <RNSpeedometer
            value={parseInt(route.params?.data.imc)}
            size={height / 2.7}
            minValue={15}
            easeDuration={300}
            maxValue={39}
            imageStyle={{backgroundColor: 'transparent',}}
            labels={[
              {
                labelColor: '#fff',
                activeBarColor: '#00000000',
              }
            ]}
            
          />

            <Text style={{ marginTop: height / 20 ,fontSize: 22 , textAlign: 'center', fontFamily: 'Montserrat-Bold' }} >
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
                    style={{elevation: 10, shadowColor: '#000000'}}
                    onPress={openModal}
                    backgroundColor={route.params?.data.cor}
                    >
                      <C.TextButtonClassific
                        color={route.params?.data.cor === '#dfdf31f6' ? '#000000' : '#fff'}>
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
                    color={route.params?.data.cor === '#dfdf31f6' ? '#000000' : '#fff'}
                  />
                </Animatable.View>  

                <Modal 
                  transparent 
                  animationType={'slide'} 
                  visible={isOpenModal} 
                  onRequestClose={ () => setIsOpenModal(false) }>

                  <View style={{ flex: 1, padding: 40, alignItems: 'center', justifyContent: 'center'}}>

                    <View style={{ elevation: 20, shadowColor: '#000000', borderWidth: 0.5,
                      justifyContent: 'center', height: 'auto', backgroundColor: '#ffffff', padding: 25, borderRadius: 20
                      }} >
                      <Animatable.View 
                        style={{marginBottom: 20}}
                        animation="flash"
                        iterationCount={5}
                        delay={200}>
                        <Text style={{
                          color: route.params?.data.cor === '#dfdf31f6' ? '#000' : route.params?.data.cor, 
                          backgroundColor: route.params?.data.cor === '#dfdf31f6' ? '#dfdf31f6' : '#fff', 
                          borderRadius: 10, 
                          textAlign: 'center', 
                          fontSize: 20, 
                          fontFamily: 'Montserrat-Bold'}}
                        >
                          {route.params?.data.classificacao}{'\n'}{route.params?.data.risco}
                        </Text>
                      </Animatable.View>
                      <Animatable.View style={{marginBottom: 30}}
                        animation="jello"
                        iterationCount={1}
                        delay={200}>
                        <Text style={{
                          textAlign: 'justify', 
                          fontFamily: 'Montserrat-Regular' }}
                        > 
                          {route.params?.data.descricao}
                        </Text>
                      </Animatable.View>
                      <Animatable.View style={{marginBottom: 30}}
                        animation="jello"
                        iterationCount={1}
                        delay={200}>
                        <Text style={{
                          textAlign: 'justify', 
                          fontFamily: 'Montserrat-Regular'}}>{route.params?.data.obs}</Text>
                      </Animatable.View>
                      <View>
                        <Button label='Fechar' onPress={closeModal} style={{elevation: 20, shadowColor: '#000000'}}/>
                      </View>
                    </View>

                  </View>
                </Modal>

            </View>
          </TouchableOpacity>
        </C.SecondViewGrafico>
      

        {

        notSaved === true ?

          <C.ButtonSave onPress={confirmSave} style={{elevation: 10, shadowColor: '#000000'}}>
            <C.TextButtonSave>SALVAR</C.TextButtonSave>
          </C.ButtonSave>
        :
          <C.ButtonSave onPress={() => navigation.navigate('home')} style={{elevation: 10, shadowColor: '#000000'}}>
            <C.TextButtonSave>CALCULAR NOVAMENTE</C.TextButtonSave>
          </C.ButtonSave>

        }

        </C.ViewVerticalGrafico>

    </Animatable.View>
  )
};

