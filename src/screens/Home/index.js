import React from 'react';

import { Background, Contact, Container, PfPContainer } from './styles';
import { Text } from 'react-native';

const Home = () => {
  return(
    <Container>
      <Background colors={['#965C2790', '#26180B']}>
        <Contact>
          <PfPContainer />
        </Contact>
      </Background>
    </Container>
  );
}

export default Home;
