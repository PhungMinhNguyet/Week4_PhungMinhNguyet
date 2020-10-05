import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import CompleteScreen from "../screens/CompleteScreen";
import AllScreen from "../screens/AllScreen";
import ActiveScreen from "../screens/ActiveScreen";
import SingleTodoScreen from "../screens/SingleToDoScreen";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AllStackScreen() {
  return (
    <Stack.Navigator
      initialRoute="AllScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AllScreen" component={AllScreen} />
      <Stack.Screen name="SingleToDoScreen" component={SingleTodoScreen} />
    </Stack.Navigator>
  );
}

export default function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "AllScreen") {
              iconName = focused
                ? "ios-add-circle-outline"
                : "ios-add-circle-outline";
            } else if (route.name === "ActiveScreen") {
              iconName = focused ? "navigation" : "navigation";
            } else if (route.name === "CompleteScreen") {
              iconName = focused ? "ios-done-all" : "ios-done-all";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="CompleteScreen" component={CompleteScreen} />
        <Tab.Screen name="AllScreen" component={AllStackScreen} />
        <Tab.Screen name="ActiveScreen" component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
