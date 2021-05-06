import React from 'react';
import { Button, View } from 'react-native';

import { Background } from './styles';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return(
    <Background colors={['#965C2790', '#26180B']}>

    </Background>
  );
}

export default Profile;
