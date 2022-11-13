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
  background-color: #ffffe0;
  width: 100%;
`
export const PrimaryView = styled.View`
  background-color: #ffffe0;
  width: 100%;
  height: 260px;
`
export const SecondView = styled.View`
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #d7ffda;
  width: 100%;
`
export const Title = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #d7ffda;
  padding: 10px;
  height: auto;
`
export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
  margin-bottom: 10px;
`
export const ResultView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`
export const ResultCircle = styled.View<HomeProps>`
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 150px;
  background-color: ${(props) => props.background ? props.background : '#ffffe0'};
  opacity: 0.9;
  border-radius: 50px;
  padding-bottom: 10px;  
  margin-top: 10px;
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
  background-color: #ffffe0;
  border-radius: 15px;
  padding-left: 10px;
  font-size: 30px;
  border-color: #909090;
  border-width: 1px;
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
  background-color:  #2dcc24 ;
  justify-content: center;
  align-items: center;
  border-color: #009726;
  border-width: 1px;
`
export const ViewButtonClear = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0px 15px 0px 15px;
`
export const ImageIMCLevel = styled.Image`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  margin-bottom: -35px;
`
export const BottomView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

`
export const ButtonSave = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 40px;
  background-color: #386dad;
  justify-content: space-evenly;
  align-items: center;
  border-color: #0000d5;
  border-width: 1px;
`
export const TextButtonCalculate = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`
export const ButtonLimpar = styled.TouchableOpacity<BtnClearProps>`
  flex: 1;
  flex-direction: row;
  height: 40px;
  background-color: #ff5959;
  justify-content: space-evenly;
  align-items: center;
`
export const TextButtonClear = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
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