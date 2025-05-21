import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const productsScreen = () => {
  return (
    <View className="flex flex-1 px-2 ">
      <FlatList // se usa el FlatList para renderizar una lista de productos
        data={products} // se le pasa la data
        keyExtractor={(item) => item.id} // se le pasa la key
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-semibold">{item.title}</Text>
            <Text className="text-gray-500">${item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-bold">{item.price}</Text>
              <Link
                href={`/drawer/tabs/(stack)/products/${item.id}`} // se le pasa el id del producto
                className=" text-primary"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )} // se le pasa el renderItem
      />
    </View>
  );
};

export default productsScreen;
