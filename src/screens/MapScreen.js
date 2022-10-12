import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";
import { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
  const { longitude, latitude } = route.params;
  //   const origin = { latitude: 26.12246, longitude: -80.27278 };
  //   const destination = { latitude: latitude, longitude: longitude };
  //   const GOOGLE_MAPS_APIKEY = "…";
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ height: heightPercentageToDP(40) }}
      >
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({});
