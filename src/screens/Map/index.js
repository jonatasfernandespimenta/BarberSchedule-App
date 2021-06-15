import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import { Container } from './styles';
import Constants from 'expo-constants';

import * as Location from "expo-location";

const Map = () => {
  const [location, setLocation] = useState(0);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});

      setLocation({ 'latitude': loc.coords.latitude, 'longitude': loc.coords.longitude});
    })();
  }, []);

  return(
    <View>
      <MapView 
        style={{ 'width': Dimensions.get('window').width, 'height': Dimensions.get('window').height }}
        initialRegion={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.011,
          longitudeDelta: 0.011,
        }}
      >
        {
          !!location &&
            <Marker
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={'Voce está aqui'}
            />
        }
      </MapView>

   
    </View>
  );
}

export default Map;
