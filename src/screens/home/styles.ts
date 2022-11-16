import styled from "styled-components/native";


interface HomeProps {
  background: string;
}
interface TextResultProps {
  resultPropColor: number;
}
interface BtnClearProps {
  colorButtonClear: string;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #aeaeae;
  width: 100%;
`
export const PrimaryView = styled.View`
  background-color: #aeaeae90;
  width: 100%;
`
export const SecondView = styled.View`
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #e6e6e6;
  width: 100%;
`
export const ViewTitle = styled.View`
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 10px;
  background-color: #aeaeae90;
  height: auto;
`
export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
`
export const ViewImage = styled.View`
  background-color: #aeaeae90;
  padding: 10px;
`
export const ImageIMCLevel = styled.Image`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  
`

export const ResultView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
export const ResultCircle = styled.View<HomeProps>`
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 150px;
  background-color: ${(props) => props.background ? props.background : '#aeaeae90'};
  opacity: 0.9;
  border-radius: 50px;
  padding-bottom: 10px;  
  margin-bottom: 5px;
`
export const Result = styled.Text<TextResultProps>`
  font-weight: bold;
  font-size: 40px;
  color: ${(props) => props.resultPropColor !== 0 ? '#fff' : '#000'};
`
export const ResultClassification = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 15px;
`
export const HStack = styled.View`
  width: 100%;
  height: 130px;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  margin-top: 20px;
`
export const ViewInput = styled.View` 
  flex: 0.6;
  align-items: center;
  justify-content: center;
  height: 130px;
  margin-top: 2px;
`
export const ViewTitleInput = styled.View`
  align-self: flex-start;
  padding: 1px;
`
export const TextTitleInput = styled.Text`
  font-weight: normal;
  font-size: 15px;
  padding-left: 20px;
`
export const Input = styled.TextInput`
  height: 40%;
  width: 90%;
  background-color: #fff;
  border-radius: 15px;
  padding-left: 15px;
  font-size: 30px;
  border-color: #aeaeae;
  border-width: 0px;
`
export const ViewButtonCalcular = styled.View`
  flex: 0.4;
  align-self: center;
  justify-content: center;
  height: 125px;
  margin-top: 20px;
`
export const ButtonCalcular = styled.TouchableOpacity`
  flex: 1;
  width: 90%;
  border-radius: 15px;
  background-color:  #00972690;
  justify-content: center;
  align-items: center;
  border-color: #009726;
  border-width: 0px;
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
export const BottomView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
`
export const ButtonSave = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 50px;
  background-color: #aeaeae;
  justify-content: space-evenly;
  align-items: center;
  border-color: #0000d5;
  border-width: 0px;
  border-radius: 10px;
  margin-left: 6px;
`
export const ButtonLimpar = styled.TouchableOpacity<BtnClearProps>`
  flex: 1;
  flex-direction: row;
  height: 50px;
  background-color: #aeaeae;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  margin-right: 6px;
`
export const TextButtonClear = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`
export const ViewHistory = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  padding: 10px;
`
export const TouchableHistory = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
export const TextHistory = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`
{/*export const ButtonLimpar = styled.TouchableOpacity<BtnClearProps>`
  flex: 1;
  height: 40px;
  background-color: ${(props) => props.colorButtonClear ? '#ff5959' : '#d7ffda'};
  justify-content: center;
  align-items: center;
`
export const TextButtonClear = styled.Text<BtnClearProps>`
  color: ${(props) => props.colorButtonClear ? '#fff' : '#d7ffda'};
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`*/}