import { Camera, CameraType } from "expo-camera";
import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Admin from "./screens/Admin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Todo from "./screens/Todo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./redux/store";

import Image from "./screens/Image";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Today"
        component={MyDrawer}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name="md-home" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Image"
        component={Image}
        options={{
          headerStyle: {
            backgroundColor: "#b4ec75",
          },
          tabBarIcon: () => {
            return <Ionicons name="today" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Todo"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#b4ec75",
          width: 240,
        },
        drawerLabelStyle: { color: "#fff" },
      }}
    >
      <Drawer.Screen
        name="List"
        component={Todo}
        options={{
          headerTitle: "Today",
          headerStyle: {
            backgroundColor: "#b4ec75",
          },
        }}
      />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Admin"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Image" component={Image} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
