import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, type ViewProps } from "react-native";

export type ScreenProps = ViewProps & {
  children: React.ReactNode;
};

export function Screen({ children, style, ...rest }: ScreenProps) {
  const { colors } = useTheme(); // Assuming you have a theme provider

  return (
    <View
      style={[{ backgroundColor: colors.background }, styles.container, style]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the screen component take up all available space
    padding: 16, // Your desired uniform padding
  },
});
