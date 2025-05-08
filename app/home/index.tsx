import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreem = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mt-20 flex-1  ">
        <Text>Home</Text>

        <Link href="/products"> Produsctos </Link>
        <Link href="/profile"> Perfil </Link>
        <Link href="/settings"> Ajustes </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreem;
