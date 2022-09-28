import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";
import { Rating } from "react-native-stock-star-rating";

const Data = [
  {
    user: "d1",
    image: require("../images/baobuns.jpg"),
    name: "Stix Asian Deliciousness",
    category: ["Chinese", "Wraps"],
    location: "Plantation",
    latitude: "26.128900",
    longitude: "-80.266810",
    timeOpen: "12:00",
    timeClose: "22:00",
    phone: "tel:9545554444",
    distance: "2.8 mi",
    rating: 4.5,
  },
  {
    user: "d2",
    image: require("../images/french.jpg"),
    name: "Bistro French Cuisine",
    category: ["French", "Wraps", "Sauces"],
    location: "Sunrise",
    latitude: "26.136510",
    longitude: "-80.232540",
    timeOpen: "17:00",
    timeClose: "23:00",
    phone: "tel:9545554448",
    distance: "1.1 mi",
    rating: 3,
  },
  {
    user: "d3",
    image: require("../images/pizza.jpg"),
    name: "Pizza Party Palace",
    category: ["Pizza", "Subs", "Sauces"],
    location: "Plantation",
    latitude: "26.125530",
    longitude: "-80.256760",
    timeOpen: "11:00",
    timeClose: "23:30",
    phone: "tel:9545554774",
    distance: "0.8 mi",
    rating: 2,
  },
  {
    user: "d4",
    image: require("../images/pizza.jpg"),
    name: "Seafood Extravaganza",
    category: ["Seafood", "Yes"],
    location: "Davie",
    latitude: "26.08957",
    longitude: "-80.25179",
    timeOpen: "11:00",
    timeClose: "23:30",
    phone: "tel:9545554774",
    distance: "3.4 mi",
    rating: 5,
  },
];
const categoryList = [
  { cat: "1", cat: "Chinese" },
  { cat: "2", cat: "Seafood" },
  { cat: "3", cat: "Wraps" },
  { cat: "4", cat: "French" },
  { cat: "5", cat: "Sauces" },
  { cat: "6", cat: "Yes" },
  { cat: "7", cat: "Subs" },
  { cat: "8", cat: "Hungarian" },
  { cat: "9", cat: "Pizza" },
];

export default function AccountDetailsScreen({ navigation }) {
  const topList = ({ item }) => (
    <View style={styles.horizontalList}>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.topScrollText}>{item.cat}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Pressable
        onPress={() =>
          navigation.navigate("RestaurantDetails", {
            name: item.name,
            rating: item.rating,
            image: item.image,
            latitude: item.latitude,
            longitude: item.longitude,
          })
        }
      >
        <Image style={styles.image} source={item.image} />
        <View style={styles.restaurantNameContainer}>
          <Text style={styles.restaurantName}>{item.name}</Text>
          <Text style={styles.distance}>{item.distance}</Text>
        </View>
        <View>
          <Rating
            stars={item.rating}
            maxStars={5}
            size={23}
            color={"#ff6666"}
          />
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryText}>{item.category[0]}</Text>
          </View>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryText}>{item.category[1]}</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: heightPercentageToDP(1) }}
        >
          <Image
            style={styles.locationIcon}
            source={require("../images/location.png")}
          />
          <Text style={styles.locationText}>{item.location}</Text>
          <Image source={require("../images/dot.png")} />
          <Text style={styles.hoursText}>Open at {item.timeOpen}</Text>
          <Text style={styles.hoursText}> Closes at {item.timeClose}</Text>
        </View>
        <View style={styles.callBtnContainer}>
          <TouchableOpacity
            style={styles.callBtn}
            onPress={() => {
              Linking.openURL(item.phone);
            }}
          >
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlashList
        estimatedItemSize={40}
        horizontal={true}
        data={categoryList}
        renderItem={topList}
        keyExtractor={(item) => item.cat}
      />
      <FlashList
        estimatedItemSize={415}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.user}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 2,
    paddingLeft: widthPercentageToDP(5),
    paddingRight: widthPercentageToDP(5),
  },
  horizontalList: {
    borderBottomColor: "#c8c8c8",
    borderBottomWidth: 2,
    height: heightPercentageToDP(8),
    justifyContent: "center",
  },
  categoryButton: {
    borderRadius: 50,
    padding: 5,
    borderColor: "#c8c8c8",
    borderWidth: 1.5,
    paddingLeft: widthPercentageToDP(3),
    paddingRight: widthPercentageToDP(3),
    marginLeft: widthPercentageToDP(3),
  },
  topScrollText: {
    fontSize: 17,
    color: "#515050",
  },
  image: {
    height: heightPercentageToDP(18),
    width: widthPercentageToDP(40),
    alignSelf: "center",
    marginTop: heightPercentageToDP(3),
    borderRadius: 8,
  },
  restaurantNameContainer: {
    marginTop: heightPercentageToDP(2),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "800",
  },
  distance: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: heightPercentageToDP(0.5),
  },
  categoryContainer: {
    marginTop: heightPercentageToDP(1),
    flexDirection: "row",
  },
  categoryTextContainer: {
    borderRadius: 7,
    backgroundColor: "#e0e0e0",
    marginRight: widthPercentageToDP(2),
  },
  categoryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#757575",
    paddingLeft: widthPercentageToDP(3),
    paddingRight: widthPercentageToDP(3),
    paddingTop: widthPercentageToDP(0.6),
    paddingBottom: widthPercentageToDP(0.6),
  },
  locationIcon: {
    //height:
  },
  locationText: {
    color: "#757575",
    marginLeft: widthPercentageToDP(1),
  },
  hoursText: {
    color: "#757575",
  },
  callBtnContainer: {
    height: heightPercentageToDP(5),
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 8,
    marginTop: heightPercentageToDP(2),
    marginBottom: heightPercentageToDP(3),
    borderColor: "#9d9d9d",
    borderWidth: 2,
  },
  callBtn: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
    justifyContent: "center",
    alignItems: "center",
  },
  callText: {
    fontSize: 22,
    fontWeight: "500",
  },
});
