import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  padding: 20px;
`;

export const Background = styled(LinearGradient)`
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Contact = styled.TouchableOpacity`
  background: #26180B;
  width: 310px;
  height: 117px;
  border-radius: 10px;
  justify-content: space-between;
  text-align: left;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

export const PfPContainer = styled.View`
  height: 70px;
  width: 70px;
  background-color: white;
  border-radius: 100px;
`;

export const TextArea = styled.View`
  margin-right: 25px;
  flex-direction: column;
  padding: 5px;
`;

export const H2 = styled.Text`
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const H3 = styled.Text`
  color: white;
  font-size: 12px;
  text-align: center;
`;
