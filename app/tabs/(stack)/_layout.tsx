import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Mostrar el encabezado
        headerShadowVisible: false, // Ocultar la sombra del encabezado
        contentStyle: {
          backgroundColor: "white", // Color de fondo del contenido
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productsssos",
          animation: "ios_from_left", // Animación de entrada
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          animation: "fade_from_bottom", // Animación de entrada
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
