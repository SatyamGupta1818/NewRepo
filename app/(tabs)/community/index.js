import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
// import { FlatList } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
const { width, height } = Dimensions.get("window");

const index = () => {
  const router = useRouter("");
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="black" // background color
        barStyle="light-content" // text color (dark/light)
        hidden={false} // show/hide status bar
      />
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 25,
              margin: 15,
              marginBottom: 5,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Trending Communities
          </Text>

          <Link push href="/(tabs)/community/communities">
            {" "}
            <AntDesign
              style={{
                margin: 15,
                marginRight: 25,
                marginBottom: 5,
                fontWeight: "bold",
              }}
              name="right"
              size={22}
              color="black"
            />
          </Link>
        </View>
        <FlatList
          horizontal
          pagingEnabled
          bounces={false}
          automaticallyAdjustsScrollIndicatorInsets={false}
          showsHorizontalScrollIndicator={false}
          data={[1, 1, 1, 1, 1]}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{ width: width, height: "auto", alignItems: "center" }}
              >
                <Pressable style={{}}>
                  <TouchableOpacity
                    style={{
                      width: "95%",
                      height: "auto",
                      backgroundColor: "black",
                      borderRadius: 10,
                      borderColor: "red",
                      borderWidth: 1,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: 10,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            // justifyContent: "space-between",
                          }}
                        >
                          <Image
                            source={require("../../../assets/glogo.webp")}
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: 40,
                              margin: 10,
                              marginBottom: 3,
                              display: "flex",
                            }}
                          />
                          <View
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontSize: 17,
                                fontWeight: "bold",
                              }}
                            >
                              Google
                            </Text>
                            <Text style={{ color: "white" }}>
                              29.3k members
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={{}}>
                        <Pressable
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#2c6fbb",
                            width: 65,
                            height: "auto",
                            borderRadius: 40,
                            borderColor: "white",
                            borderWidth: 1,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              textAlign: "center",
                              fontSize: 15,
                              padding: 6,
                            }}
                          >
                            Join
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                    <Text
                      style={{
                        color: "white",
                        margin: 10,
                        marginTop: 0,
                      }}
                    >
                      Lorem ipsum gogole hello world program in ggole hola
                      hellad ladfl
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ width: "90%" }}>
          <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: "bold" }}>
            Trending Communities
          </Text>
        </View>
        <FlatList
          // pagingEnabled
          // bounces={false}
          showsVerticalScrollIndicator={false}
          data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{ width: width, height: "auto", alignItems: "center" }}
              >
                <Pressable style={{ margin: 10 }}>
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: "auto",
                      backgroundColor: "black",
                      borderRadius: 10,
                      borderColor: "red",
                      borderWidth: 1,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: 10,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            // justifyContent: "space-between",
                          }}
                        >
                          <Image
                            source={require("../../../assets/glogo.webp")}
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: 40,
                              margin: 10,
                              marginBottom: 3,
                              display: "flex",
                            }}
                          />
                          <View
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontSize: 17,
                                fontWeight: "bold",
                              }}
                            >
                              Google
                            </Text>
                            <Text style={{ color: "white" }}>
                              29.3k members
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={{}}>
                        <Pressable
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#2c6fbb",
                            width: 65,
                            height: "auto",
                            borderRadius: 40,
                            borderColor: "white",
                            borderWidth: 1,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              textAlign: "center",
                              fontSize: 15,
                              padding: 6,
                            }}
                          >
                            Join
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                    <Text
                      style={{
                        color: "white",
                        margin: 10,
                        marginTop: 0,
                      }}
                    >
                      Lorem ipsum gogole hello world program in ggole hola
                      hellad ladfl
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
