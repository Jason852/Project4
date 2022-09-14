import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";

export default function SignInScreen({ navigation }) {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  console.log(userId);
  console.log(password);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* <TopImageComponent image={"../images/chinese-food-container.png"} /> */}
      <View>
        <Image
          source={require("../images/chinese-food-container.png")}
          style={styles.image}
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
        <View style={styles.userPassword}>
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
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() =>
            navigation.navigate("AccountDetailsScreen", {
              name: { userId },
              password: { password },
            })
          }
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registrationContainer}>
        <Text style={styles.registrationText}>Not a member yet? Please </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={{ fontWeight: "bold", color: "#383838" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.orContainerLines}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orContainerLines}></View>
      </View>
      <View style={styles.buttonsContainer}>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../images/facebook.png")}
              style={{
                height: heightPercentageToDP(5),
                width: widthPercentageToDP(11),
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../images/twitter-logo.png")}
              style={{
                height: heightPercentageToDP(5),
                width: widthPercentageToDP(11),
                marginLeft: widthPercentageToDP(4),
                marginRight: widthPercentageToDP(4),
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../images/instagram-logo.png")}
              style={{
                height: heightPercentageToDP(5),
                width: widthPercentageToDP(11),
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
  },
  image: {
    height: 220,
    width: 220,
    marginTop: heightPercentageToDP(12),
    alignSelf: "center",
  },
  userSignIn: {
    flexDirection: "row",
    //backgroundColor: "yellow",
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(5),
    marginTop: heightPercentageToDP(8),
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#dedede",
    borderWidth: 2,
    borderRadius: 5,
  },
  userPassword: {
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
  userIcon: {
    marginLeft: widthPercentageToDP(4),
    marginRight: widthPercentageToDP(3),
  },
  passwordIcon: {
    marginLeft: widthPercentageToDP(5),
    marginRight: widthPercentageToDP(4),
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
  registrationContainer: {
    //backgroundColor: "yellow",
    flexDirection: "row",
    height: heightPercentageToDP(5),
    justifyContent: "center",
    alignItems: "center",
    marginTop: heightPercentageToDP(2),
  },
  registrationText: {
    color: "#7F8487",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: heightPercentageToDP(3),
  },
  orContainerLines: {
    backgroundColor: "#dedede",
    height: 1,
    width: widthPercentageToDP(35),
  },
  orText: {
    fontWeight: "500",
    color: "#7F8487",
    marginLeft: widthPercentageToDP(2),
    marginRight: widthPercentageToDP(2),
  },
  buttonsContainer: {
    flexDirection: "row",
    //backgroundColor: "yellow",
    justifyContent: "center",
    marginTop: heightPercentageToDP(4),
  },
});
