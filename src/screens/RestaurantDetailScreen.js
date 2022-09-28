import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP } from "../../utils/scaler";
import { Rating } from "react-native-stock-star-rating";

export default function RestaurantDetailScreen({ route }) {
  const { name, rating, image } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={{ color: "#fff", fontSize: 25 }}>
          {JSON.stringify(name)}
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
