import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  
`;

export const Background = styled(LinearGradient)`
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Contact = styled.View`
  background: #26180B;
  width: 310px;
  height: 117px;
  border-radius: 10px;
  justify-content: center;
  text-align: left;
  padding: 10px;
`;

export const PfPContainer = styled.View`
  height: 70px;
  width: 70px;
  background-color: white;
  border-radius: 100px;
`;
