import React, { useCallback, useEffect, useState } from 'react';
import {Alert, ToastAndroid, Text} from 'react-native';
import {theme} from '../../styles/theme';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


import {
  Container,
  ResultView,
  Input,
  Result,
  ViewInput,
  ViewTitleInput,
  TextTitleInput,
  PrimaryView,
  SecondView,
  ButtonLimpar,
  ResultClassification,
  ButtonCalcular,
  ImageIMCLevel,
  ResultCircle,
  HStack,
  ViewButtonCalcular,
  TextButtonClear,
  TextButtonCalculate,
  ButtonSave,
  BottomView,
  ViewTitle,
  TextTitle,
  ViewImage,
  TouchableHistory,
  ViewHistory,
  TextHistory} from './styles';

const Home = () => {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultindex, setResultIndex] = useState(0);
  const [resultIMC, setResultIMC] = useState('');
  const [color, setColor] = useState('');
  const regex = /[-.,]/g;

  function calcularImc(){
    if ((peso.length === 0) || (altura.length === 0)){
      Alert.alert('Campos vazios', 'Favor, preencha os campos')
    } else {
      let tempPeso = parseFloat(peso)
      let tempAltura = parseFloat(altura)
      let tempResult= (tempPeso / ( tempAltura * tempAltura)) * 10000
      var result: any= tempResult.toFixed(2)
      setResultIndex(result)
      classification(result)
    }
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
  const clearForm = () => {
    setResultIMC('')
    setResultIndex(0)
    setAltura('')
    setPeso('')
    setColor('')
    setTimeout(() => {
      ToastAndroid.show('Campos apagados!', ToastAndroid.SHORT)
    }, 200)
  };


  return(
    <Container >
      <PrimaryView>

        <ViewTitle>
          <TextTitle> CALCULE SEU IMC </TextTitle>
        </ViewTitle>

        <ViewImage>
          <ImageIMCLevel source={require('../../../assets/images/imc-logo.png')}/>
        </ViewImage>

        <ResultView>
          <ResultCircle background={color}  >
          <Result resultPropColor={resultindex} >
            {resultindex === 0 ? '?' : resultindex}
          </Result>
            <ResultClassification>{resultIMC}</ResultClassification>
          </ResultCircle>
        </ResultView>

      </PrimaryView>

      <SecondView>
        <HStack>
          <ViewInput>
            <ViewTitleInput>
              <TextTitleInput>Altura (cm)</TextTitleInput>
            </ViewTitleInput>
            
            <Input
              placeholder='Altura'
              placeholderTextColor={'#808080'}
              onChangeText={
                (i) => setAltura(i[0] !== '0' ? i.trim().replace(regex, '') : '')
              }
              value={altura}
              keyboardType={'numeric'}
              maxLength={3}/>

            <ViewTitleInput>
              <TextTitleInput>Peso (kg)</TextTitleInput>
            </ViewTitleInput> 
            
            <Input
              placeholder='Peso'
              placeholderTextColor={'#808080'}
              onChangeText={
                (i) => setPeso(i[0] !== '0' ? i.trim().replace(regex, '') : '')
              }
              value={peso}
              keyboardType={'numeric'}
              maxLength={3}/>

          </ViewInput >

          <ViewButtonCalcular>
            <ButtonCalcular onPress={() => calcularImc()}>
              <TextButtonCalculate>CALCULAR</TextButtonCalculate>
            </ButtonCalcular>
          </ViewButtonCalcular>

        
        </HStack>

        <BottomView>
          <ButtonLimpar colorButtonClear={ peso || altura} onPress={() => clearForm()}>
            <MaterialIcons name="cleaning-services" size={30} color="#000" />
            <TextButtonClear>LIMPAR</TextButtonClear>
          </ButtonLimpar>

          <ButtonSave>
            <TextButtonCalculate>SALVAR</TextButtonCalculate>
            <AntDesign name="save" size={30} color="#000" />
          </ButtonSave>
        </BottomView>

        <ViewHistory>
          <TouchableHistory>
            <TextHistory>HISTÓRICO</TextHistory>
          </TouchableHistory>
        </ViewHistory>
        
      </SecondView>

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
    </Container>
  )
};

export default Home
