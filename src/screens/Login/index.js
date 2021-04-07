import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { Container } from './styles';

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  return(
    <ImageBackground source={require('../../../assets/barber.jpeg')} style={{ flex: 1 }}>
      <Container>
        <TextInput
          label="Email"
          style={{ marginTop: 50, width: '80%', backgroundColor: 'transparent', color: 'white' }}
          underlineColor='white'
          value={email}
          mode={'flat'}
          onChangeText={email => setEmail(email)}
          autoCapitalize={'none'}
        />

        <TextInput
          label="Senha"
          style={{ marginTop: 50, width: '80%', backgroundColor: 'transparent', color: 'white' }}
          underlineColor='white'
          value={pass}
          mode={'flat'}
          onChangeText={pass => setPass(pass)}
        />

        <Button mode='outlined' style={{ marginTop: 30, borderColor: 'white', borderWidth: 1 }}>
          Entrar
        </Button>
      </Container>
    </ImageBackground>
  );
}

export default Login;
