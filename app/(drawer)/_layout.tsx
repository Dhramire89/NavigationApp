import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";

const Drawerlayout = () => {
  return (
    <Drawer
      // esta propiedad es para el drawer
      drawerContent={CustomDrawer} // esta propiedad es para el drawer
      screenOptions={{
        // esta propiedad oculta el header

        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
      }}
    >
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          headerShown: true,
          drawerLabel: "Horarrio", //esta etiqueta es la que se muestra en el drawer
          title: "Horario", //esta etiqueta es la que se muestra en el header
          drawerIcon: (
            { color, size } //icono que se muestra en el drawer
          ) => <Ionicons name="calendar-outline" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="(tabs)" // este es el nombre
        options={{
          headerShown: false, // este es el header
          drawerLabel: "tabs",
          title: "tabs",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default Drawerlayout;
