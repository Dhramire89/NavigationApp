import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Page() {
  useEffect(() => {
    console.log("✅ NativeWind debería estar aplicando clases ahora");
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Text className="text-white text-xl">Prueba de estilos</Text>
    </View>
  );
}
