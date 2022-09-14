import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";

export default function RegisterScreen({ navigation }) {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  console.log(userId);
  console.log(password);
  console.log(passwordConfirm);
  console.log(address);
  console.log(phoneNumber);

  return (
    <SafeAreaView>
      <View style={styles.signUpHeading}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../images/smartphone.png")}
        />
      </View>
      <View>
        <View style={styles.userSignIn}>
          <Image
            source={require("../images/user.png")}
            style={styles.userIcon}
          />
          <TextInput
            placeholder="Email"
            style={{ fontSize: 17, paddingRight: widthPercentageToDP(50) }}
            value={userId}
            onChangeText={(text) => setUserId(text)}
            type="email"
          />
        </View>
        <View style={styles.userInput}>
          <Image
            source={require("../images/password.png")}
            style={styles.passwordIcon}
          />
          <TextInput
            placeholder="Password"
            style={{ fontSize: 17, paddingRight: widthPercentageToDP(50) }}
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.userInput}>
          <Image
            source={require("../images/password.png")}
            style={styles.passwordIcon}
          />
          <TextInput
            placeholder="Confirm Password"
            style={{ fontSize: 17, paddingRight: widthPercentageToDP(50) }}
            value={passwordConfirm}
            secureTextEntry={true}
            onChangeText={(text) => setPasswordConfirm(text)}
          />
        </View>
        <View style={styles.userInput}>
          <Image
            source={require("../images/addressIcon2.png")}
            style={styles.addressIcon}
          />
          <TextInput
            placeholder="Address"
            style={{ fontSize: 17, paddingRight: widthPercentageToDP(50) }}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={styles.userInput}>
          <Image
            source={require("../images/mobileIcon.png")}
            style={styles.addressIcon}
          />
          <TextInput
            placeholder="Phone Number"
            style={{ fontSize: 17, paddingRight: widthPercentageToDP(50) }}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() =>
            navigation.navigate("WelcomeScreen", {
              name: { userId },
              password: { password },
              passwordConfirm: { passwordConfirm },
              address: { address },
              phone: { phoneNumber },
            })
          }
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  image: {
    height: 220,
    width: 220,
    marginTop: heightPercentageToDP(2),
    alignSelf: "center",
  },
  signUpHeading: {
    marginTop: heightPercentageToDP(6),
    marginLeft: widthPercentageToDP(5),
    //justifyContent: "flex-end",
  },
  signUpText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#6a6a6a",
  },
  userSignIn: {
    flexDirection: "row",
    //backgroundColor: "yellow",
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(5),
    marginTop: heightPercentageToDP(6),
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#dedede",
    borderWidth: 2,
    borderRadius: 5,
  },
  userIcon: {
    marginLeft: widthPercentageToDP(4),
    marginRight: widthPercentageToDP(3),
  },
  userInput: {
    flexDirection: "row",
    //backgroundColor: "yellow",
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(5),
    marginTop: heightPercentageToDP(2),
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#dedede",
    borderWidth: 2,
    borderRadius: 5,
  },
  passwordIcon: {
    marginLeft: widthPercentageToDP(5),
    marginRight: widthPercentageToDP(4),
  },
  addressIcon: {
    marginLeft: widthPercentageToDP(5),
    marginRight: widthPercentageToDP(3),
  },
  loginBtn: {
    backgroundColor: "#ff4e4e",
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(5),
    marginTop: heightPercentageToDP(5),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  loginText: {
    color: "#fff",
    fontSize: 17,
  },
});
