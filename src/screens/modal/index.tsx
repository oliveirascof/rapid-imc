import * as React from 'react';
import * as C from './styles'
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ModalConfirm () {

  const navigation = useNavigation()
  const toast = useToast()

  async function clearStorage () {
      try {
          await AsyncStorage.clear()
          toast.show(`Dados apagados com sucesso!`, {
              type: `success`,
              placement: "top",
              duration: 2000,
              animationType: "slide-in",
              textStyle: {fontSize: 20},
          })
          setTimeout(() => {navigation.navigate('home')}, 1000 )
      } catch {
          toast.show(`Não foi possivel excluir os dados!`, {
              type: `danger`,
              placement: "top",
              duration: 3000,
              animationType: "slide-in",
              textStyle: {fontSize: 20},
          })
      }
  };

  function handleGoBack () {
    navigation.goBack()
  };


  return (
    <C.ModalContainer>
      <C.ViewHorizontal>

        <C.ViewTextTitleModal>
          <C.TextTitleModal>
            Apagar registros?
          </C.TextTitleModal>
        </C.ViewTextTitleModal>
       
        <C.BottomModalView>
          <C.ButtomDeletar onPress={ () => clearStorage() }>
            <C.TextButtonDeletar>
              CONFIRMAR
            </C.TextButtonDeletar>
          </C.ButtomDeletar>

          <C.ButtomCancelar onPress={ () => handleGoBack() }>
            <C.TextButtonCancelar>
              CANCELAR
            </C.TextButtonCancelar>
          </C.ButtomCancelar>
        </C.BottomModalView>

        </C.ViewHorizontal>
    </C.ModalContainer>
  )
};
