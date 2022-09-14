import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";

const Data = [
  {
    id: "d1",
    image: require("../images/baobuns.jpg"),
    name: "Stix Asian Deliciousness",
    category: ["Chinese", "Wraps"],
    location: "Sunrise",
    timeOpen: "12:00",
    timeClose: "22:00",
    phone: "9545554444",
    distance: "2.8 mi",
  },
  {
    id: "d2",
    image: require("../images/french.jpg"),
    name: "Bistro French Cuisine",
    category: ["French", "Wraps", "Sauces"],
    location: "Ft Lauderdale",
    timeOpen: "17:00",
    timeClose: "23:00",
    phone: "9545554448",
    distance: "1.1 mi",
  },
  {
    id: "d3",
    image: require("../images/pizza.jpg"),
    name: "Pizza Party Palace",
    category: ["Pizza", "Subs", "Sauces"],
    location: "Miami",
    timeOpen: "11:00",
    timeClose: "23:30",
    phone: "9545554774",
    distance: "0.8 mi",
  },
  {
    id: "d4",
    image: require("../images/pizza.jpg"),
    name: "Seafood Extravaganza",
    category: ["Seafood", "Yes"],
    location: "Ft Lauderdale",
    timeOpen: "11:00",
    timeClose: "23:30",
    phone: "9545554774",
    distance: "3.4 mi",
  },
];
const categoryList = [
  { id: "1", cat: "Chinese" },
  { id: "2", cat: "Seafood" },
  { id: "3", cat: "Wraps" },
  { id: "4", cat: "French" },
  { id: "5", cat: "Sauces" },
  { id: "6", cat: "Yes" },
  { id: "7", cat: "Subs" },
  { id: "8", cat: "Hungarian" },
  { id: "9", cat: "Pizza" },
];

export default function AccountDetailsScreen() {
  const topList = ({ item }) => (
    <View style={styles.horizontalList}>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.topScrollText}>{item.cat}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.restaurantNameContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={{ borderRadius: 40 }}>
          <Text style={styles.categoryText}>{item.category[0]}</Text>
        </View>
        <Text style={styles.categoryText}>{item.category[1]}</Text>
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
        <TouchableOpacity style={styles.callBtn}>
          <Text style={styles.callText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        horizontal={true}
        data={categoryList}
        renderItem={topList}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    borderBottomColor: "#000",
    borderBottomWidth: 5,
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
    borderRadius: 40,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#757575",
    paddingLeft: widthPercentageToDP(1),
    paddingRight: widthPercentageToDP(1),
    paddingTop: widthPercentageToDP(0.6),
    paddingBottom: widthPercentageToDP(0.6),
    marginRight: widthPercentageToDP(4),
    backgroundColor: "#e0e0e0",
    borderRadius: 40,
    //alignSelf: "center",
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

// figure out what three grey colors we want to use.  See if we can use the ones form the signon sheet
