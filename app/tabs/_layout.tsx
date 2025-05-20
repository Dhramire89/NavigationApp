import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Configuracion",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="apps-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
