import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`
export const PrimaryView = styled.View`
  background-color: #ffffff;
  width: 100%;
`
export const SecondView = styled.View`
  flex: 1;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  background-color: #d7ffda;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-width: 0.5px;
`
export const Title = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 40px;
`
export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 50px;
`
export const ResultView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`
export const ResultBox = styled.View`
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 150px;
  background-color: #ffffe0;
  border-radius: 10px;
  padding: 10px;
  border-width: 1px;
  
`
export const Result = styled.Text`
  font-weight: 150px;
  font-size: 60px;
`
export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #26b61f;
  justify-content: center;
  align-items: center;
`
export const TextButton = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`
export const Input = styled.TextInput`
  height: 80px;
  width: 280px;
  background-color: #ffffe0;
  border-width: 1px;
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
export const ViewButtonCalcular = styled.View`
  margin-top: 50px;
`
export const ResultTextTitle = styled.Text`
  font-weight: bold;
`
export const ResultClassification = styled.Text`
  font-weight: bold;
`