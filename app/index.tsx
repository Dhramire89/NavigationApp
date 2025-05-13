import { Redirect } from "expo-router";

export default function Page() {
  return <Redirect href="/(stack)/home" />; // redirecciona a la página de Home
  // return (

  // ejemplo de uso de fonts
  // return (
  //   <SafeAreaView className="flex-1 bg-white">
  //     <View className="mt-20 flex-1  ">
  //       <Text className=" m-5 font-monse-black text-primary  text-3xl font-bold">
  //         Desde el componente de la página
  //       </Text>
  //       <Text className=" m-5 font-monse-medium text-secondary-default text-2xl font-bold">
  //         Desde el componente de la página
  //       </Text>
  //       <Text className=" m-5 font-monse-light text-secondary-200 text-xl font-bold">
  //         Desde el componente de la página
  //       </Text>
  //       <Link href="/products"> Productos </Link> // solo para pruebas
  //     </View>
  //   </SafeAreaView>
}
