import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Background, Contact, Container, H2, PfPContainer, TextArea, H3 } from './styles';

const Home = () => {
  const navigation = useNavigation();

  return(
    <Background colors={['#965C2790', '#26180B']}>
      <Container>
        {
          [0, 1, 2, 3, 4, 5].map(i => 
            <Contact onPress={ () => navigation.navigate('Map') }>
              <PfPContainer />

              <TextArea>
                <H2>Fulano de Tal | Zeor</H2>
                <H3>Aberto das 6h as 18h</H3>
              </TextArea>
            </Contact>
          )
        }
      </Container>
    </Background>
  );
}

export default Home;
