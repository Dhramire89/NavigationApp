import { products } from "@/store/products.store";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  // se usa el useLocalSearchParams para obtener los params de la url, se le pasa el id del producto
  const product = products.find((product) => product.id === id); // se busca el producto por el id
  if (!product) {
    // si no se encuentra el producto, se muestra un mensaje de error
    return (
      <View>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    // se renderiza el producto
    <View className="px-5 mt-5">
      <Text className="font-monse-black mb-2">{product.title}</Text>
      <Text className="mb-2">{product.description}</Text>
      <Text className="font-monse-black">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
