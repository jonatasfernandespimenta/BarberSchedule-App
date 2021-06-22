import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #26180B;
  flex: 1;
  width: 95%;
  border-radius: 10px;
  padding: 15px;
  align-items: center;
`;

export const Background = styled(LinearGradient)`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PfPContainer = styled.View`
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 100px;
  margin-right: 5%;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  flex-wrap: wrap;
`;

export const Column = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: white;
  font-size: ${({ size }) => size || '12px' };
`;

export const Categorie = styled.View`
  background: #B68300;
  height: 23px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin: 4px;
`;
