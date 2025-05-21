import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Drawer from "expo-router/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = ( props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} >
     <View className="flex-1 bg-primary justify-center items-center mx-3 p-10 mb-10 h[150px] rounded-lg"> "> 
      <View className="flex-1 justify-center items-center bg-white rounded-full h-24 w-24">
        <Text className="text-center text-primary font-monse-black">
          DR
        </Text>
     </View>
     </View>

     <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
