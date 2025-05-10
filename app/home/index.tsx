import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-10 mt-5">
        <Link href="/products" asChild>
          <CustomButton className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        <CustomButton
          className="mb-10"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-10"
          variant="text-only"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

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
