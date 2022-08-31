import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignInScreen from "../screens/SignInScreen";
import AccountDetailsScreen from "../screens/AccountDetailsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AccountDetailsScreen"
        component={AccountDetailsScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
}

// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   Image,
//   TextInput,
// } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";
// import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";