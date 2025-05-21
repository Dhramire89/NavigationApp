import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/drawer/tabs/(stack)/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/drawer/tabs/(stack)/settings")}
        >
          Ajustes
        </CustomButton>

        <Link href="/drawer/tabs/(stack)/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        {/* <Link className="mb-5" href="/products">
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
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
