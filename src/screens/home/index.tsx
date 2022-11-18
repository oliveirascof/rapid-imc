import React, { useCallback, useEffect, useState, createRef } from 'react';
import {Alert, ToastAndroid, Text, View} from 'react-native';
import {theme} from '../../styles/theme';
import { FontAwesome  , MaterialIcons } from '@expo/vector-icons';
import * as C from './styles';
import { useNavigation } from '@react-navigation/native';
import { Slider, Badge } from 'react-native-ui-lib';
import uuid from 'react-native-uuid';
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {

  const [resultindex, setResultIndex] = useState(0);
  const [resultIMC, setResultIMC] = useState('');
  const [color, setColor] = useState('');
  const [slideValue, setSlideValue] = useState(50);

  const [alturaValue, setAlturaValue] = useState(50);
  const [pesoValue, setPesoValue] = useState(50);
  const sliderAltura: any = createRef();
  const sliderPeso: any = createRef();
  const toast = useToast()

  const regex = /[-.,]/g;
  const { navigate } = useNavigation();

  const weight = String(pesoValue)
  const height = String(alturaValue)
  const bmi = String(resultindex)
  const classific = resultIMC
  const newColor = color


  function handleNextPage () {
    navigate('historic')
  };

  function calcularImc(){
      let tempPeso = pesoValue
      let tempAltura = alturaValue
      let tempResult= (tempPeso / ( tempAltura * tempAltura)) * 10000
      let result: any = tempResult.toFixed(1)
      setResultIndex(result)
      classification(result)
  };

  function classification(imc: number){
    var classification = ''
    var color = ''
    if (imc > 0 && imc < 18.4){
        classification =  'Baixo Peso'
        color = theme.colors.classification.baixopeso
    } else if (  (imc > 18.4 && imc <= 24.9) ){
        classification =  'Normal'
        color = theme.colors.classification.normal
    } else if (  (imc > 24.9 && imc <= 29.9) ){
        classification =  'Sobrepeso'
        color = theme.colors.classification.sobrepeso
    } else if ( (imc > 29.9 && imc <= 34.9) ){
        classification =  'Obesidade grau 1'
        color = theme.colors.classification.obeso1
    } else if ( (imc > 34.9 && imc <= 39.9) ){
        classification =  'Obesidade grau 2'
        color = theme.colors.classification.obeso2
    } else if ( imc > 39.9 ){
      classification =  'Obesidade grau 3'
      color = theme.colors.classification.obeso2
    } else {
      setResultIndex(0)
    }
    setResultIMC(classification)
    setColor(color)
  };

  function notification (message: string, type: string) {
    toast.show(`${message}`, {
      type: `${type}`,
      placement: "top",
      duration: 3000,
      animationType: "zoom-in",
      textStyle: {fontSize: 20},
    })
  };

  function clearForm() {
    sliderAltura.current.reset()
    sliderPeso.current.reset()
    setResultIMC( () => '' )
    setResultIndex( () => 0 )
    setSlideValue( () => 50 )
    setAlturaValue( () => 50 )
    setPesoValue( () => 50 )
    setColor( () => '' )
    notification("Campos resetados", "normal")

  };

  async function handleNew () {
    if (resultindex === 0) {
      notification("Calcule o IMC!", "danger")
    } else {
      try {
        var id = uuid.v4();
        var date = new Date()
        var dateAt = date.toLocaleString().split(' ')
        const newData = {
          id, weight, height, bmi, dateAt, classific, newColor
        }

        const response = await AsyncStorage.getItem('@savedata:historic')
        const previosData = response ? JSON.parse(response) : [];
        const recoverData = [newData,...previosData]

        await AsyncStorage.setItem('@savedata:historic', JSON.stringify(recoverData))
        notification("Registrado!", "success")
        setTimeout( () => {handleNextPage()}, 500 )
      } catch {
        notification("Erro o gravar os dados!", "danger") // "normal | success | warning | danger | custom",
      }
    }
  };


  return(
    <C.Container >
      <C.PrimaryView>

        <C.ViewTitle>
          <C.TextTitle> CALCULE SEU IMC </C.TextTitle>
        </C.ViewTitle>

        <C.ViewImage>
          <C.ImageIMCLevel source={require('../../../assets/images/imc-logo.png')}/>
        </C.ViewImage>

        <C.ResultView>
          <C.ResultCircle background={color} borderColor={color} >
          <C.Result resultPropColor={resultindex} >
            {resultindex === 0 ? '?' : resultindex}
          </C.Result>
            <C.ResultClassification>{resultIMC}</C.ResultClassification>
          </C.ResultCircle>
        </C.ResultView>

      </C.PrimaryView>

      <C.SecondView>

          <C.ViewInput>

            <C.ViewTitleInput>
              <C.TextTitleInput>Altura (cm)</C.TextTitleInput>
            </C.ViewTitleInput>

            <C.TouchableInput>
              <C.TextTouchableInput>{alturaValue}</C.TextTouchableInput>
            </C.TouchableInput>

            <C.ViewSlide>
              <Slider
                value={slideValue}
                minimumValue={20}
                maximumValue={240}
                ref={ sliderAltura }
                onValueChange={(value) => setAlturaValue( () => Math.round(value))}
              />
            </C.ViewSlide>


            { /* <C.ViewTitleInput>
              placeholder='Altura'
              placeholderTextColor={'#808080'}
              onChangeText={
                (i) => setAltura(i[0] !== '0' ? i.trim().replace(regex, '') : '')
              }
              value={altura}
              keyboardType={'numeric'}
              maxLength={3}/> */}

            { /*<C.Input
              placeholder='Peso'
              placeholderTextColor={'#808080'}
              onChangeText={
                (i) => setPeso(i[0] !== '0' ? i.trim().replace(regex, '') : '')
              }
              value={peso}
              keyboardType={'numeric'}
              maxLength={3}/> */ }

              <C.ViewTitleInput>
                <C.TextTitleInput>Peso (kg)</C.TextTitleInput>
              </C.ViewTitleInput>

              <C.TouchableInput>
                <C.TextTouchableInput>{pesoValue}</C.TextTouchableInput>
              </C.TouchableInput>

              <C.ViewSlide>
                <Slider
                  value={slideValue}
                  minimumValue={2}
                  maximumValue={250}
                  ref={ sliderPeso }
                  onValueChange={(value) => setPesoValue( () => Math.round(value))}
                />
              </C.ViewSlide>

              <C.ViewButtonCalcular>
                <C.ButtonCalcular onPress={ calcularImc }>
                  <C.TextButtonCalculate>CALCULAR</C.TextButtonCalculate>
                </C.ButtonCalcular>
              </C.ViewButtonCalcular>

              <C.ViewHistory>
                <C.TouchableHistory onPress={ handleNextPage } >
                    <C.TextHistory>
                      <Badge label='HISTÓRICO' size={24}/>
                    </C.TextHistory>
                </C.TouchableHistory>
              </C.ViewHistory>

          </C.ViewInput >



          <C.BottomView>
            <C.ButtonClear  onPress={ clearForm }>
              <MaterialIcons name="cleaning-services" size={20} color="#000" />
              <C.TextButtonClear>RECOMEÇAR</C.TextButtonClear>
            </C.ButtonClear>

            <C.ButtonSave onPress={ handleNew } >
              <C.TextButtonSave>SALVAR</C.TextButtonSave>
              <FontAwesome  name="save" size={20} color="#000" />
            </C.ButtonSave>
          </C.BottomView>



      </C.SecondView>

      {/*<BottomView>
        <ViewButtonClear>
          <ButtonLimpar colorButtonClear={ peso || altura} onPress={() => clearForm()}>
            <TextButtonClear colorButtonClear={ peso || altura}>LIMPAR</TextButtonClear>
          </ButtonLimpar>

          <ButtonSave>
            <TextButtonCalculate>SALVAR</TextButtonCalculate>
          </ButtonSave>
          </ViewButtonClear>
      </BottomView>*/}
    </C.Container>
  )
};

export default Home
