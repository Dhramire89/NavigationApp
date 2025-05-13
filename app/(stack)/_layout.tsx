import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Principal",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
