import styled, { DefaultTheme } from 'styled-components/native';


interface HomeProps {
  background: string
}

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffe0;
  width: 100%;
  height: 100%;
`
export const PrimaryView = styled.View`
  background-color: #ffffe0;
  width: 100%;

`
export const SecondView = styled.View`
  flex: 1;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  height: 100%;
  background-color: #d7ffda;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

`
export const Title = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: #d7ffda;
  
  padding: 10px;

`
export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 50px;
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
`
export const Result = styled.Text`
  font-weight: bold;
  font-size: 60px;
  color: #fff;
`
export const ResultClassification = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 15px;
`
export const ButtonCalcular = styled.TouchableOpacity`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background-color: #2dd024;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
export const ButtonLimpar = styled.TouchableOpacity`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background-color: #ff5959;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
export const TextButton = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`
export const Input = styled.TextInput`
  height: 80px;
  width: 280px;
  background-color: #ffffe0;

  border-radius: 10px;
  padding-left: 10px;
  font-size: 40px;
`
export const ViewInput = styled.View`
  margin: 10px;
`
export const ViewTitleInput = styled.View`
  margin: 5px;
`
export const TextTitleInput = styled.Text`
  font-weight: bold;
  font-size: 20px;
`
export const ViewButtons = styled.View`
  margin-top: 30px;
  flex-direction: row;
`
export const Avatar = styled.Image`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  margin-bottom: -35px;
`