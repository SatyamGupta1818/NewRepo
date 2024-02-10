import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import axios from "axios";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter("");

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      profileImage: image,
    };

    axios
      .post("http://192.168.0.108:8088/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration Successfull",
          "You have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
        setImage("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occured while registering"
        );
        console.log("Registration failed", error);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
        paddingTop: 20,
      }}
    >
      <StatusBar
        backgroundColor="black" // background color
        barStyle="light-content" // text color (dark/light)
        hidden={false} // show/hide status bar
      />
      <View>
        <Image
          style={{ width: 200, height: 150, resizeMode: "contain" }}
          source={require("../../assets/logoreddit-removebg-preview.png")}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            marginBottom: 10,
          }}
        >
          STACKTECH
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Register to your account
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 30,
              marginTop: 30,
            }}
          >
            <MaterialCommunityIcons
              style={{ marginLeft: 8 }}
              name="account"
              size={28}
              color="black"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 17 : 17,
              }}
              placeholder="Enter your Name"
            />
          </View>
        </View>
        <View style={{ marginTop: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 30,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={28}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 17,
              }}
              placeholder="Enter your emial"
            />
          </View>
        </View>
        <View style={{ marginTop: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 30,
              marginTop: 30,
            }}
          >
            <Entypo
              style={{ marginLeft: 8 }}
              name="lock"
              size={28}
              color="black"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 17 : 17,
              }}
              placeholder="Enter your Password"
            />
          </View>
        </View>
        <View style={{ marginTop: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 30,
              marginTop: 30,
            }}
          >
           <Entypo  style={{ marginLeft: 8 }} name="image-inverted" size={28} color="black" />
            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: image ? 17 : 17,
              }}
              placeholder="Enter your Image url"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white" }}>Keep me Logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forget Password?
          </Text>
        </View>

        <View style={{ marginTop: 50 }} />
        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "#FF5700",
            borderRadius: 50,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.replace("/login")}
          style={{ marginTop: 15 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Already have an account? Log in
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
