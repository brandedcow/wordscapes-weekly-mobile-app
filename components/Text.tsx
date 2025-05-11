import { useTheme } from "@react-navigation/native";
import {
  Text as ReactNativeText,
  StyleSheet,
  type TextProps as ReactNativeTextProps,
} from "react-native";

export type TextVariant = "default" | "heading";

export type TextProps = ReactNativeTextProps & {
  variant?: TextVariant;
};

export function Text(props: TextProps) {
  const { colors } = useTheme();
  const { style, variant = "default", ...otherProps } = props;

  const variantStyle = styles[variant];

  return (
    <ReactNativeText
      style={[{ color: colors.text }, variantStyle, style]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  default: {},
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
