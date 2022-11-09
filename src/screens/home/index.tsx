import React, { useState } from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {theme} from '../../styles/theme';
import {
  Container,
  Title,
  TextTitle,
  ResultView,
  TextButton,
  Input,
  Result,
  ViewInput,
  ViewTitleInput,
  TextTitleInput,
  PrimaryView,
  SecondView,
  ButtonLimpar,
  ResultClassification,
  ViewButtons,
  ButtonCalcular,
  Avatar,
  ResultCircle} from './styles';

function Home(){

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultindex, setResultIndex] = useState(0)
  const [resultIMC, setResultIMC] = useState('')
  const [color, setColor] = useState('')
  const regex = /[-.,]/g;

  function calcularImc(){
    var result = 0
    if ((peso.length === 0) || (altura.length === 0)){
      Alert.alert('Campos vazios', 'Favor, preencha os campos')
    } else {
      let tempPeso = parseFloat(peso)
      let tempAltura = parseFloat(altura)
      let tempResult = (tempPeso / ( tempAltura * tempAltura))
      result = Math.round(tempResult * 10000);
      setResultIndex(() => result)
      classification(result)
    }
  }

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
    } else {
      classification =  'Obesidade grau 3'
      color = theme.colors.classification.obeso2
    }
    setResultIMC(() => classification)
    setColor(() => color)
  }

  function clearForm(){
    setResultIMC('')
    setResultIndex(0)
    setAltura('')
    setPeso('')
    setColor('')
    setTimeout(() => {
      ToastAndroid.show('Campos apagados!', ToastAndroid.SHORT)
    }, 200)
  }

  return(
    <Container>

      <PrimaryView>

        <Title>
          <TextTitle>
            Calcule seu IMC
          </TextTitle>
          <Avatar source={require('../../../assets/imc-logo.png')}/>
        </Title>

        <ResultView>
          <ResultCircle background={color}  >
          <Result>
            {resultindex === 0 ? '?' : resultindex}
          </Result>
            <ResultClassification>{resultIMC}</ResultClassification>
          </ResultCircle>
        </ResultView>

      </PrimaryView>

      <SecondView>
        <ViewInput>
          <ViewTitleInput>
            <TextTitleInput>Sua altura (cm)</TextTitleInput>
          </ViewTitleInput>
          <Input
            placeholder='Altura'
            placeholderTextColor={'#808080'}
            onChangeText={(i) => setAltura(i[0] !== '0' ? i.trim() : '')}
            value={altura.replace(regex, '')}
            keyboardType={'numeric'}
          />
        </ViewInput>

        <ViewInput>
          <ViewTitleInput>
            <TextTitleInput>Seu peso (kg)</TextTitleInput>
          </ViewTitleInput>
          <Input
            placeholder='Peso'
            placeholderTextColor={'#808080'}
            onChangeText={(i) => setPeso(i[0] !== '0' ? i.trim() : '')}
            value={peso.replace(regex, '')}
            keyboardType={'numeric'}
          />
        </ViewInput >

        <ViewButtons>
          <ButtonCalcular onPress={() => calcularImc()}>
            <TextButton>CALCULAR</TextButton>
          </ButtonCalcular>
          <ButtonLimpar onPress={() => clearForm()}>
            <TextButton>LIMPAR</TextButton>
          </ButtonLimpar>
        </ViewButtons>

      </SecondView>
    </Container>
  )
};

export default Home
