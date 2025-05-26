import { products } from "@/store/products.store";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const navigation = useNavigation(); // se usa el useNavigation para navegar entre pantallas
  // se usa el useLocalSearchParams para obtener los params de la url, se le pasa el id del producto
  const { id } = useLocalSearchParams();
  // se busca el producto por el id
  const product = products.find((product) => product.id === id); // se busca el producto por el id

  // se usa el useEffect para establecer el título de la pantalla
  useEffect(() => {}, [product]);
  navigation.setOptions({
    title: product ? product.title : "Product Details", // se establece el título de la pantalla
  });

  if (!product) {
    // si no se encuentra el producto, se muestra un mensaje de error
    return (
      <View>
        <Text>Product not found</Text>
      </View>
    );
  }

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
