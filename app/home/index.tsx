import CustomButton from "@/components/shared/CustomButton";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-10 mt-5">
        <CustomButton children={"Productos"} color={"primary"} />

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
