import React, { useState, createRef } from 'react';
import { Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import * as C from './styles';
import { useNavigation } from '@react-navigation/native';
import { Slider } from 'react-native-ui-lib';
import { classification } from '../../services/classification';
import { useToast } from "react-native-toast-notifications";
import { Fontisto } from '@expo/vector-icons';

export default function Home (): JSX.Element {

  const {height, width} = Dimensions.get("screen");

  const [alturaValue, setAlturaValue] = useState('80');
  const [pesoValue, setPesoValue] = useState('30');

  const [isData, setIsData] = useState(false);

  const [iconMale, setIconMale] = useState('#000')
  const [iconFemale, setIconFemale] = useState('#9e9e9e')

  const [slideAltura, setSlideAltura] = useState(70);
  const [slidePeso, setSlidePeso] = useState(50);
  
  const sliderAltura: any = createRef();
  const sliderPeso: any = createRef();

  const navigation = useNavigation();
  const toast = useToast();

  const regex = /[-.,]/g;
  const regNum = /\D/g;

  async function handleResultPage (data: any) {

    navigation.navigate('resultado', {data})

  };

  function handleChart () {
    navigation.navigate('chart')
  };

  function calcularImc(){
    if (pesoValue.length > 0 && alturaValue.length > 0) {
      try {
        let tempPeso = parseInt(pesoValue)
        let tempAltura = parseInt(alturaValue)
        let tempResult= (tempPeso / ( tempAltura * tempAltura)) * 10000
        let result: any = tempResult.toFixed(1)
        let { classific, colors, descript, risk, obs } = classification(result)
        let registerFromHome = true

        let data = {
          peso: tempPeso,
          altura: tempAltura,
          imc: tempResult.toFixed(1),
          classificacao: classific,
          cor: colors,
          descricao: descript,
          risco: risk,
          obs: obs,
          registerFromHome,
        }
        
        
        handleResultPage(data)
        
      } catch {
        Alert.alert('Erro', 'Falha ao calcular, tente novamente!')
      }
      
    } else {
      showToast('Digite um valor para calcular', 'danger')
    }
  };
  
  function clearForm() {
    sliderAltura.current.reset()
    sliderPeso.current.reset()
    //setResultIMC( '' )
    //setResultIndex( 0 )
    setAlturaValue( String(80) )
    setPesoValue( String(30) )
    setSlideAltura( 80 )
    setSlidePeso( 30 )
    //setColor( '' )
    showToast("Campos resetados", "normal")
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

function selectSexMale (){
  setIconMale('#000')
  setIconFemale('#9e9e9e')
};

function selectSexFemale (){
  setIconFemale('#000')
  setIconMale('#9e9e9e')
};

function event1 (event: any) {
  if ( isNaN(parseInt(event)) ) {
    setSlideAltura(1)
  } else {
    setSlideAltura(parseInt(event))
  }
};

function event2 (event: any) {
  if ( isNaN(parseInt(event)) ) {
    setSlidePeso(1)
  } else {
    setSlidePeso(parseInt(event))
  }
};




  return(
    <C.Container heightEcra={String(height / 1)} widthEcra={String(width / 1)} >
      
      <C.PrimaryView>
        <C.ViewTitle>
          <Text style={{ 
            fontSize: 20,
            color : '#000',
            fontFamily: 'Montserrat-Bold',
          }}> CALCULADORA IMC </Text>
        </C.ViewTitle>

        <C.ImageIMCLevel source={require('../../../assets/images/imc-logo.png')}/>
      </C.PrimaryView> 

      <C.SecondView>

        <C.ViewInput >

          <C.ViewTitleInput>
            <C.TextTitleInput>Altura (cm)</C.TextTitleInput>
          </C.ViewTitleInput>

          <C.Input  // Primeira Input
            style={{elevation: 10, shadowColor: '#000000'}}
            placeholder='Altura'
            placeholderTextColor='#808080'
            keyboardType='numeric'
            maxLength={3}
            onChangeText={ (i) => {
              setAlturaValue( i.trim().charAt(0) === '0' ? '' : i.trim().replace(regex, '') )
              event1(i)
            } }
            value={alturaValue}
          />

          <C.ViewSlide>
            <Slider 
              value={ slideAltura }
              minimumValue={1}
              maximumValue={240}
              ref={ sliderAltura }
              onValueChange={ value => { setAlturaValue( String(Math.round(value)) )
              }}
            />
          </C.ViewSlide>

            <C.ViewTitleInput>
              <C.TextTitleInput>Peso (kg)</C.TextTitleInput>
            </C.ViewTitleInput>

            <C.Input // Segunda Input
              style={{elevation: 10, shadowColor: '#000000'}}
              placeholder='Peso'
              placeholderTextColor='#808080'
              keyboardType='numeric'
              maxLength={3}
              onChangeText={ (i) => {
                setPesoValue( i.trim().charAt(0) === '0' ? '' : i.trim().replace(regex, '') )
                event2(i)
              } }
              value={ pesoValue }
            />

            <C.ViewSlide>
              <Slider
                value={ slidePeso }
                minimumValue={1}
                maximumValue={240}
                ref={ sliderPeso }
                onValueChange={ value => { setPesoValue( String(Math.round(value)) )
                }}
              />
            </C.ViewSlide>


        <C.ViewAskSex >
          <TouchableOpacity onPress={selectSexMale} >
            <C.BoxEsqu enabled={iconMale}>
              <Fontisto name="male" color={iconMale} size={height / 20} />
            </C.BoxEsqu>
          </TouchableOpacity>
          <TouchableOpacity onPress={selectSexFemale} >
            <C.BoxDir enabled={iconFemale}>
              <Fontisto name="female" color={iconFemale} size={height / 20}/>
            </C.BoxDir>
          </TouchableOpacity>
        </C.ViewAskSex>
        

          </C.ViewInput >

          <C.ViewBottomCalculate >
            <C.ButtonCalculate onPress={ calcularImc } style={{elevation: 10, shadowColor: '#000000'}}>
              <C.TextButtonCalculate>CALCULAR</C.TextButtonCalculate>
            </C.ButtonCalculate>
          </C.ViewBottomCalculate>

      </C.SecondView>

    </C.Container>
  )
};


