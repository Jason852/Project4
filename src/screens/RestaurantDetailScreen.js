import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RestaurantDetailScreen({ route }) {
  const { name } = route.params;
  return (
    <SafeAreaView>
      <Text>RestaurantDetailScreen</Text>
      <Text>Username: {JSON.stringify(name)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
