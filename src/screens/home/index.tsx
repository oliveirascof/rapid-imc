import React, { useState } from 'react';
import {Alert} from 'react-native';
import {
  Container, 
  Title, 
  TextTitle, 
  ResultView, 
  TextButton, 
  Button, 
  Input, 
  ResultBox, 
  Result,
  ViewInput,
  ViewTitleInput,
  TextTitleInput,
  ViewButtonCalcular,
  PrimaryView,
  SecondView,
  ResultTextTitle,
  ResultClassification} from './styles';

function Home(){

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultindex, setResultIndex] = useState(0)
  const [resultIMC, setResultIMC] = useState('')
  const regex = /[-.,]/g;

  function calcularImc(){
    var result = 0
    if ((peso.length === 0) || (altura.length === 0)){
      Alert.alert('Campos vazios', 'Favor, preencha os campos')
    } else {
      let tempPeso = parseFloat(peso)
      let tempAltura = parseFloat(altura)
      let tempResult = (tempPeso / ( tempAltura * tempAltura))
      result = Math.round(tempResult * 10000)
      setResultIMC(() => Classification(result)) 
      setResultIndex(result)
    }
  }

  function Classification(imc: number){
    var classification = ''
    if (imc > 0 && imc < 18.4){
        classification =  'Baixo Peso'
    } else if (  (imc > 18.4 && imc <= 24.9) ){
        classification =  'Normal'
    } else if (  (imc > 24.9 && imc <= 29.9) ){
        classification =  'Sobrepeso'
    } else if ( (imc > 29.9 && imc <= 34.9) ){
        classification =  'Obesidade grau 1'
    } else if ( (imc > 34.9 && imc <= 39.9) ){
        classification =  'Obesidade grau 2'
    } else {
      classification =  'Obesidade grau 3'
    }
    return classification
  }

  return(
    <Container>

      <PrimaryView>

        <Title>
          <TextTitle>
            Calcule seu IMC
          </TextTitle>
        </Title>

        <ResultView>
          <ResultBox>
            <ResultTextTitle>Resultado</ResultTextTitle>
          <Result>
            {resultindex === 0 ? '?' : resultindex}
          </Result>
            <ResultClassification>{resultIMC}</ResultClassification>
          </ResultBox>
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

        <ViewButtonCalcular>
          <Button 
            onPress={calcularImc}>
            <TextButton>
              CALCULAR
            </TextButton>
          </Button>
        </ViewButtonCalcular>

      </SecondView>
    </Container>
  )
};

export default Home
