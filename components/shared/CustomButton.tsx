import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

// expandir el componente para que reciba props
// y se le pueda pasar el texto y el color del fondo y el color de texto

interface CustomButtonProps extends PressableProps {
  children: string;
  color: "primary" | "secondary" | "tertiary";
}

const CustomButton = ({ children, color }: CustomButtonProps) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  return (
    // la clase active:opacity-90 es para que el boton se vea mas oscuro cuando se le da click
    <Pressable className={`p-3 rounded-md ${btnColor} active:opacity-90`}>
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
