import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP } from "../../utils/scaler";
import { Rating } from "react-native-stock-star-rating";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function RestaurantDetailScreen({ route }) {
  const { name, rating, image, latitude, longitude } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ height: heightPercentageToDP(40) }}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={{ color: "#fff", fontSize: 25 }}>
          {JSON.stringify(name)}
        </Text>
        <Text style={{ color: "#fff", fontSize: 25 }}>
          {JSON.stringify(latitude)}
        </Text>

        <View>
          <Rating stars={rating} maxStars={5} size={23} color={"#ff6666"} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: heightPercentageToDP(25),
  },
});
