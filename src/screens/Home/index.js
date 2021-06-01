import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Background, Contact, Container, H2, PfPContainer, TextArea, H3 } from './styles';

import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const navigation = useNavigation();

  return(
    <Background colors={['#965C2790', '#26180B']}>
      <Container>
        {
          [0, 1, 2, 3, 4, 5].map(i => 
            <Contact onPress={ () => navigation.navigate('Profile') }>
              <PfPContainer />

              <TextArea>
                <H2>Fulano de Tal | Zeor</H2>
                <H3>Aberto das 6h as 18h</H3>
              </TextArea>
            </Contact>
          )
        }
      </Container>
      <Button onPress={ () => navigation.navigate('Map') } mode='outlined' style={{ marginBottom: 10, borderColor: 'white', borderWidth: 1 }}>
        <Icon name="map-marker" color="white" size={18} />
        Mapa
      </Button>
    </Background>
  );
}

export default Home;
