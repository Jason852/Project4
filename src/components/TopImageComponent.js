import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { heightPercentageToDP } from "../../utils/scaler";

export default function TopImageComponent(props) {
  return (
    <View>
      <Image
        //source={require({props.image})}
        //source={require("../images/chinese-food-container.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 220,
    marginTop: heightPercentageToDP(12),
    alignSelf: "center",
  },
});
