import "react-native-gesture-handler";
import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import communities from "../community/communities";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function Layout() {
  return (
    <NavigationContainer independent={true}>
      <GestureHandlerRootView style={{ flex: 1, marginTop: -10 }}>
        <Drawer
          screenOptions={{
            headerShown: true,
            headerTitleAlign: "start",
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Home",
              title: "Home",
              drawerIcon: () => <Entypo name="menu" size={24} color="black" />,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
