import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mt-20 flex-1 px-4  ">
        <Link className="mb-5" href="/products">
          {" "}
          Producdtos{" "}
        </Link>
        <Link className="mb-5" href="/profile">
          {" "}
          Perfil{" "}
        </Link>
        <Link className="mb-5" href="/settings">
          {" "}
          Ajustes{" "}
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
