import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AudioVideoScreen, AcelerometroScreen, 
    PedometroScreen, GyroscopioScreen, MagnetoScreen
 } from "../screens";
import colors from "../styles/colors";
import { Ionicons, MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.black,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Acelerometro"
        component={AcelerometroScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="car" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="AudioVideo"
        component={AudioVideoScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="video" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Magneto"
        component={MagnetoScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="magnet" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedometro"
        component={PedometroScreen}
        options={{
          tabBarIcon: () => (
            <Foundation name="foot" size={24} color={colors.white} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}