import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountDetailsScreen({ route }) {
  const { name, password } = route.params;

  return (
    <SafeAreaView>
      <Text>Username: {JSON.stringify(name)}</Text>
      <Text>Password: {JSON.stringify(password)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
