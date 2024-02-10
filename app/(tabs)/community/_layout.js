import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";

export default function Layout() {
  return (
    <NavigationContainer independent={true}>
      <GestureHandlerRootView style={{ flex: 1, marginTop: -10 }}>
        <Drawer
          screenOptions={{
            headerShown: true,
            // headerTitleAlign: "c",
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Communities",
              title: "Communities",
              drawerIcon: () => <Entypo name="menu" size={24} color="black" />,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
