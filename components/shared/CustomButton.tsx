import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

// expandir el componente para que reciba props
// y se le pueda pasar el texto y el color del fondo y el color de texto

interface CustomButtonProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contained",
      className,
    }: CustomButtonProps,
    ref: React.Ref<View>
  ) => {
    // el color del fondo
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary-default",
      tertiary: "bg-tertiary",
    }[color];

    // el color del texto
    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary-default",
      tertiary: "text-tertiary",
    }[color];

    // si el color es primario, el texto es blanco, si no es blanco
    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3 ${className} `}
          // el color del fondo
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center ${textColor} font-monse-black`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      // la clase active:opacity-90 es para que el boton se vea mas oscuro cuando se le da click
      <Pressable
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className} font-monse-black`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center">{children}</Text>
      </Pressable>
    );
  }
);

export default CustomButton;
