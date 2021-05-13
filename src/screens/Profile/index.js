import React from 'react';
import { Button, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Background, Container, PfPContainer, Row, Text, Column, Categorie } from './styles';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return(
    <Background colors={['#965C2790', '#26180B']}>
      <Container>
        <Row>
          <PfPContainer/>
          <Column>
            <Text size={16}>Roberto D. Steven | Zeor</Text>
            <Text size={14}>Aberto das: 06h - 20h</Text>
          </Column>
        </Row>

        <Row>
          <Text size={12}>Rua Coronel Amancio Bueno - 495</Text>
          <Icon name="map-marker" color="white" size={20} style={{ marginLeft: 10 }} />
        </Row>

        <Row>
          <Categorie>
            <Text>BARBA</Text>
          </Categorie>

          <Categorie>
            <Text>CABELO</Text>
          </Categorie>

          <Categorie>
            <Text>SOMBRANCELHA</Text>
          </Categorie>
        </Row>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
          <View>
            <Text style={{width: 55, textAlign: 'center'}}>Horarios</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        </View>

      </Container>
    </Background>
  );
}

export default Profile;
