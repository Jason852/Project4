import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen({ route }) {
  const { name, password, passwordConfirm, address, phone } = route.params;
  return (
    <SafeAreaView>
      <Text>Username: {JSON.stringify(name)}</Text>
      <Text>Password: {JSON.stringify(password)}</Text>
      <Text>passwordConfirm: {JSON.stringify(passwordConfirm)}</Text>
      <Text>address: {JSON.stringify(address)}</Text>
      <Text>phone: {JSON.stringify(phone)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
