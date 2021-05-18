import React from 'react';
import { Dimensions, View } from 'react-native';
import MapView from 'react-native-maps';
// import { Container } from './styles';

const Map = () => {
  return(
    <View>
      <MapView 
        style={{ 'width': Dimensions.get('window').width, 'height': Dimensions.get('window').height }}
        initialRegion={{
          latitude: -22.932924,
          longitude: -47.073845,
          latitudeDelta: 0.011,
          longitudeDelta: 0.011,
        }}
      />
    </View>
  );
}

export default Map;
