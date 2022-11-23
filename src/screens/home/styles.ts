import styled from "styled-components/native";

interface EcraProps {
  heightEcra: string
  widthEcra: string
}

interface HomeProps {
  background: string;
  borderColor: string;
}
interface TextResultProps {
  resultPropColor: number;
}
interface BtnClearProps {
  colorButtonClear: string;
}

export const Container = styled.SafeAreaView<EcraProps>`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #c0c0c0;
`
export const PrimaryView = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: center;
  background-color: #e6e6e6;
  width: 95%;
  border-radius: 20px;
  margin: 5px 5px 5px 5px;
`
export const SecondView = styled.View`
  flex: 0.8;
  border-radius: 20px;
  background-color: #e6e6e6;
  width: 95%;
  margin: 5px 5px 5px 5px;
  justify-content: center;
`
export const BottomView = styled.View`
  flex: 0.1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  background-color: #c0c0c0;
  border-radius: 20px;
  margin-bottom: 10px;
`
export const ViewTitle = styled.View`
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`
export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #000;
`
export const ViewImage = styled.View`
  background-color: #e6e6e6;
  width: 95%;
  align-self: center;
  margin: 5px;
`
export const ImageIMCLevel = styled.Image`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  
`
export const ResultView = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px 0px 10px 0px;
  flex: 1;
`
export const ResultCircle = styled.View<HomeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: ${(props) => props.background ? '#3e3e3e' : '#e6e6e6'};
  border-radius: 30px;
  border-width: 5px;
  border-color: ${(props) => props.borderColor ? props.borderColor : '#e6e6e6'};
`
export const Result = styled.Text<TextResultProps>`
  font-weight: bold;
  font-size: 40px;
  color: ${(props) => props.resultPropColor !== 0 ? '#fff' : '#000'};
`
export const ResultClassification = styled.Text`
  font-weight: normal;
  color: #fff;
  font-size: 18px;

`
export const ViewResultDescription = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const StyleModal = styled.View<HomeProps>`
  flex: 0.8;
  background-color: #e6e6e6;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 100px 50px 100px 50px;
  padding: 10px;
  border-width: 2px;
  border-color: ${(props) => props.borderColor ? props.borderColor : '#e6e6e6'};
`
export const ViewDescription = styled.TouchableHighlight`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex: 1;
  margin: 10px;
`

export const ViewInput = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const ViewTitleInput = styled.View`
  align-self: flex-start;
  padding: 1px;
`
export const TextTitleInput = styled.Text`
  font-weight: normal;
  font-size: 20px;
  padding-left: 20px;
`
export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  border-radius: 15px;
  background-color:  #fff;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  border-color: #009726;
  border-width: 0px;
  font-size: 30px;
  text-align: left;
  font-weight: normal;
`
export const TouchableInput = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  border-radius: 15px;
  background-color:  #fff;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  border-color: #009726;
  border-width: 0px;
`
export const TextTouchableInput = styled.Text`
  font-size: 35px;
  text-align: left;
  font-weight: normal;
`
export const ViewSlide = styled.View`
  width: 90%;
`
export const ViewButtonCalcular = styled.View`
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  
`
export const ButtonCalcular = styled.TouchableOpacity`
  width: 90%;
  border-radius: 15px;
  background-color: #00cc00;
  justify-content: center;
  align-items: center;
  border-color: #009726;
  border-width: 0px;
  height: 50px;
  margin-top: 15px;
`
export const TextButtonCalculate = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`
export const ViewButtonClear = styled.View`
  justify-content: center;
  align-items: center;
`

export const ButtonSave = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  background-color: #77b6ea;
  justify-content: space-evenly;
  align-items: center;
  border-color: #0000d5;
  border-width: 0px;
  border-radius: 15px;
  flex: 1;
  margin-left: 5px;
`
export const TextButtonSave = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
export const ButtonClear = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  border-width: 0px;
  border-color: #808080;
  background-color: #e6e6e6;
  flex: 1;
  margin-right: 5px;
`
export const TextButtonClear = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

export const TouchableHistory = styled.View`
  margin: 30px;
  border-radius: 10px;
`
export const TextHistory = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  
`

export const ViewBottomCalculate = styled.View`
    justify-content:center;
    align-items: center;
`

export const ButtonCalculate = styled.TouchableOpacity`
  width: 95%;
  border-radius: 50px;
  background-color: #00cc00;
  justify-content: center;
  align-items: center;
  border-color: #009726;
  border-width: 0px;
  height: 50px;
  margin-bottom: 10px;

`