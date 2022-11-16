import React, { useCallback, useEffect, useState } from 'react';
import {Alert, ToastAndroid, Text} from 'react-native';
import {theme} from '../../styles/theme';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as C from './styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultindex, setResultIndex] = useState(0);
  const [resultIMC, setResultIMC] = useState('');
  const [color, setColor] = useState('');
  const regex = /[-.,]/g;
  const { navigate } = useNavigation()

  function handleNextPage () {
    navigate('historic')
  }

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
    <C.Container >
      <C.PrimaryView>

        <C.ViewTitle>
          <C.TextTitle> CALCULE SEU IMC </C.TextTitle>
        </C.ViewTitle>

        <C.ViewImage>
          <C.ImageIMCLevel source={require('../../../assets/images/imc-logo.png')}/>
        </C.ViewImage>

        <C.ResultView>
          <C.ResultCircle background={color}  >
          <C.Result resultPropColor={resultindex} >
            {resultindex === 0 ? '?' : resultindex}
          </C.Result>
            <C.ResultClassification>{resultIMC}</C.ResultClassification>
          </C.ResultCircle>
        </C.ResultView>

      </C.PrimaryView>

      <C.SecondView>
        <C.HStack>
          <C.ViewInput>
            <C.ViewTitleInput>
              <C.TextTitleInput>Altura (cm)</C.TextTitleInput>
            </C.ViewTitleInput>
            
            <C.Input
              placeholder='Altura'
              placeholderTextColor={'#808080'}
              onChangeText={
                (i) => setAltura(i[0] !== '0' ? i.trim().replace(regex, '') : '')
              }
              value={altura}
              keyboardType={'numeric'}
              maxLength={3}/>

            <C.ViewTitleInput>
              <C.TextTitleInput>Peso (kg)</C.TextTitleInput>
            </C.ViewTitleInput> 
            
            <C.Input
              placeholder='Peso'
              placeholderTextColor={'#808080'}
              onChangeText={
                (i) => setPeso(i[0] !== '0' ? i.trim().replace(regex, '') : '')
              }
              value={peso}
              keyboardType={'numeric'}
              maxLength={3}/>

          </C.ViewInput >

          <C.ViewButtonCalcular>
            <C.ButtonCalcular onPress={() => calcularImc()}>
              <C.TextButtonCalculate>CALCULAR</C.TextButtonCalculate>
            </C.ButtonCalcular>
          </C.ViewButtonCalcular>

        
        </C.HStack>

        <C.BottomView>
          <C.ButtonLimpar colorButtonClear={ peso || altura} onPress={() => clearForm()}>
            <MaterialIcons name="cleaning-services" size={30} color="#000" />
            <C.TextButtonClear>LIMPAR</C.TextButtonClear>
          </C.ButtonLimpar>

          <C.ButtonSave>
            <C.TextButtonCalculate>SALVAR</C.TextButtonCalculate>
            <AntDesign name="save" size={30} color="#000" />
          </C.ButtonSave>
        </C.BottomView>

        <C.ViewHistory>
          <C.TouchableHistory onPress={ handleNextPage } >
            <C.TextHistory>HISTÓRICO</C.TextHistory>
          </C.TouchableHistory>
        </C.ViewHistory>
        
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
