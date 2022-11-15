import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP, heightPercentageToDP } from "../../utils/scaler";

export default function FetchScreen() {
  //const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState();
  const [newKey, setNewKey] = useState();
  const [newValue, setNewValue] = useState();
  //   useEffect(() => {
  //     fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7a8f9d22&t=")
  //       .then((val) => {
  //         if (val.ok) {
  //           return val;
  //         }
  //       }) // Converting text to json
  //       .then((res) => {
  //         res.json();
  //       }) // now we have access to data
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7a8f9d22&t=")
      // https://foodbukka.herokuapp.com/api/v1/menu
      .then((res) => {
        if (res.ok) {
          // console.log(res.headers)
          return res;
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        //setIsLoading(false);
      });
  }, []);
  //console.log(data, "-------------------");

  // const getContent = () => {
  //   if (isLoading) {
  //     return <ActivityIndicator size="large" />;
  //   } else {
  //     return <Text>API called</Text>;
  //   }
  //   //console.log(data);
  // };

  const handleYearChange = (e) => {
    //console.log(e);
    setData({ ...data, Year: e });
  };

  const handleMetascoreRemoval = () => {
    setData((current) => {
      const { Metascore, ...rest } = current;

      return rest;
    });
  };

  const handleAddingData = () => {
    data.Zebra = newValue;
    console.log(data);
    //console.log("hello");

    // const obj = { name: "Johnny" };

    // obj.age = 30;
    // obj.state = "crazy";

    // console.log(obj);

    //console.log(data, "***************");
    //console.log(newValue);
  };

  return (
    <>
      {data ? (
        <SafeAreaView>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Text style={{ fontSize: 20 }}>Change Year:</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="New year"
                style={{ fontSize: 18 }}
                value={setData.Year}
                onChangeText={handleYearChange}
                //onChangeText={(text) => setData.Year(text)}
              />
            </View>
          </View>
          {/* <View>{getContent()}</View> */}
          <View>
            <Text>{data.Title} </Text>
            <Text>{data.Rated} </Text>
            <Text>{data.Year} </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Text style={{ fontSize: 20 }}>Remove Metascore:</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.removalBtn}
                onPress={handleMetascoreRemoval}
              >
                <Text style={styles.loginText}>Remove Score</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: heightPercentageToDP(10),
            }}
          >
            <View>
              <Text style={{ fontSize: 20 }}>Add new key to Data:</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Add Key"
                style={{ fontSize: 18 }}
                value={newKey}
                onChangeText={setNewKey}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: heightPercentageToDP(1),
            }}
          >
            <View>
              <Text style={{ fontSize: 20 }}>Add value to key:</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Add Value"
                style={{ fontSize: 18 }}
                value={newValue}
                onChangeText={setNewValue}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.addBtn} onPress={handleAddingData}>
              <Text style={styles.loginText}>Add Data</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: widthPercentageToDP(40),
    marginLeft: 10,
    marginBottom: 5,
    padding: 5,
    borderColor: "#dedede",
    borderWidth: 2,
    borderRadius: 5,
  },
  removalBtn: {
    backgroundColor: "#ff4e4e",
    width: widthPercentageToDP(25),
    height: heightPercentageToDP(5),
    marginLeft: widthPercentageToDP(5),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: "#ff4e4e",
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(5),
    marginTop: heightPercentageToDP(2),
    marginLeft: widthPercentageToDP(5),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
