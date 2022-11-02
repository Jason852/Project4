import {
  StyleSheet,
  Text,
  View,
  Linking,
  ImageBackground,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";
import { Rating } from "react-native-stock-star-rating";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RestaurantDetailScreen({ navigation, route }) {
  const {
    name,
    rating,
    image,
    latitude,
    longitude,
    category,
    timeClose,
    phone,
  } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View
          style={{
            height: heightPercentageToDP(35),
            justifyContent: "space-between",
          }}
        >
          <View style={styles.topBar}>
            <View style={{ justifyContent: "center" }}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                title="Go back"
                onPress={() => navigation.goBack()}
              >
                <Image source={require("../images/back-arrow.png")}></Image>
                <Text style={{ fontSize: 20, color: "#fff" }}>Search</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: widthPercentageToDP(35),
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity>
                <Image source={require("../images/bookmark.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../images/upload.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../images/dots.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginLeft: widthPercentageToDP(5) }}>
            <Text style={styles.restaurantName}>{name}</Text>

            <View style={{ marginBottom: widthPercentageToDP(5) }}>
              <Rating stars={rating} maxStars={5} size={23} color={"#ff6666"} />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          height: heightPercentageToDP(7),
          width: widthPercentageToDP(26),
          marginLeft: widthPercentageToDP(5),
          justifyContent: "space-evenly",
          marginTop: heightPercentageToDP(1),
          //marginBottom: heightPercentageToDP(1),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "600",
              color: "#3c3c3d",
              marginRight: widthPercentageToDP(3),
            }}
          >
            {category[0]}
          </Text>
          <Text style={{ fontWeight: "600", color: "#3c3c3d" }}>
            {category[1]}
          </Text>
        </View>
        <View>
          <Text>Open until {timeClose}</Text>
        </View>
        <View>
          <Pressable>
            <Text style={{ color: "#4287f5" }}>See all hours -</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.fullBtn}>
          <View style={styles.btnIcon}>
            <Image source={require("../images/add-review-icon1.png")} />
          </View>
          <Text style={styles.btnText}>Add Review</Text>
        </Pressable>
        <Pressable
          style={styles.fullBtn}
          onPress={() => {
            Linking.openURL(phone);
          }}
        >
          <View style={styles.btnIcon}>
            <Image source={require("../images/phone-call.png")} />
          </View>
          <Text style={styles.btnText}>Call</Text>
        </Pressable>
        <Pressable
          style={styles.fullBtn}
          onPress={() =>
            navigation.navigate("MapScreen", {
              latitude: latitude,
              longitude: longitude,
            })
          }
        >
          <View style={styles.btnIcon}>
            <Image source={require("../images/map.png")} />
          </View>
          <Text style={styles.btnText}>View map</Text>
        </Pressable>
        <Pressable
          style={styles.fullBtn}
          onPress={() => navigation.navigate("FetchScreen")}
        >
          <View style={styles.btnIcon}>
            <Image source={require("../images/websiteIcon.png")} />
          </View>
          <Text style={styles.btnText}>Website</Text>
        </Pressable>
      </View>
      {/* <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ height: heightPercentageToDP(40) }}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: heightPercentageToDP(35),
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightPercentageToDP(6),
    marginLeft: widthPercentageToDP(2),
  },
  restaurantName: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    height: heightPercentageToDP(11),
    width: widthPercentageToDP(100),
    justifyContent: "space-around",
    //marginLeft: widthPercentageToDP(1),
    //marginRight: widthPercentageToDP(5),
    paddingBottom: heightPercentageToDP(1),
    borderBottomColor: "#e8e9eb",
    borderBottomWidth: 2,
  },
  fullBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnIcon: {
    height: 40,
    width: 40,
    backgroundColor: "#dbdbdb",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: heightPercentageToDP(1),
  },
  btnText: {
    fontSize: 12,
  },
});
