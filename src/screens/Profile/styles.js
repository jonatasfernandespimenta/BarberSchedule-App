import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import adjust from '../../utils/responsivity';

export const Container = styled.View`
  background: #26180B;
  flex: 1;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
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

export const WeekDay = styled.TouchableOpacity`
  border-radius: 3px;
  background: #B68300;
  justify-content: center;
  align-items: center;
  height: ${adjust(40)}px;
  width: ${adjust(40)}px;
  margin: 4px;
  margin-top: 10px;
  padding: 2px;
`;

export const CalendarContainer = styled.View`
  flex-direction: column;
`;

export const Schedule = styled.View`
  border-radius: 10px;
  background: #B68300;
  padding: 10px;
  height: 100px;
  width: 80%;
  margin-top: 30px;
`;

export const Hr = styled.View`
  height: 1px;
  background: #ffffff40;
  width: 100%;
`;
