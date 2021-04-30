import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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
  return (
    <>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </>
  );
}
