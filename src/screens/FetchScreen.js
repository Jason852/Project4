import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

export default function FetchScreen() {
  const [data, setData] = useState();
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
    fetch("https://foodbukka.herokuapp.com/api/v1/menu")
      .then((res) => {
        if (res.ok) {
          // console.log(res.headers)
          return res;
        }
      })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data.Result, "-------------------");

  return (
    <View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
