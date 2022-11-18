import styled from 'styled-components/native';


interface ColorProp {
    newColor: string;
}

export const HStack = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
`
export const VStack = styled.View`
    flex-direction: column;
    flex: 1;
`
export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: #e6e6e6;
    padding: 10px;

`

export const FlatListContainer = styled.View`
    height: 70px;
    border-width: 1px;
    border-radius: 15px;
    border-color: #c0c0c0c0;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: 5px;
`

export const IMCText = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin-left: 5px;
`

export const NormalText = styled.Text`
    font-weight: bold;
    font-size: 15px;
    margin-left: 3px;
`

export const Circle = styled.View<ColorProp>`
    width: 15px;
    height: 15px;
    background-color: ${ (props) => props.newColor ? props.newColor : '#000' };
    border-radius: 5px;
`

export const BottomV = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const ButtonV = styled.TouchableOpacity`
    width: 95%;
    border-radius: 15px;
    background-color:  #ff5151;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 15px;
`

export const TextV = styled.Text`
    text-align: center;
    font-size: 20px;
    color: #fff;
`

export const ViewHstackLine2 = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    margin-top: 5px;
`