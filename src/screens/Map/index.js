import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import MapView from 'react-native-maps';
// import { Container } from './styles';
import Constants from 'expo-constants';

import * as Location from "expo-location";

const Map = () => {
  const [location, setLocation] = useState({ 'cords': { 'latitude': 0, 'longitude': 0} });

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return(
    <View>
      <MapView 
        style={{ 'width': Dimensions.get('window').width, 'height': Dimensions.get('window').height }}
        initialRegion={{
          latitude: location?.coords?.latitude,
          longitude: location?.coords?.longitude,
          latitudeDelta: 0.011,
          longitudeDelta: 0.011,
        }}
      />
    </View>
  );
}

export default Map;
