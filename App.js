import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Location from "expo-location";
import { useEffect } from 'react/cjs/react.development';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#f1c40f',
    placeholder: 'white',
    text: 'white'
  },
};


export default function App() {
  useEffect(async() => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission denied')
      return;
    }
  }, [])

  return (
    <>
      <PaperProvider 
        theme={theme}
        settings={{
          icon: props => <AwesomeIcon {...props} />,
        }}
      >
        <Routes />
      </PaperProvider>
    </>
  );
}
