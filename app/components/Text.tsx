import { useTheme } from "@react-navigation/native";
import {
  Text as ReactNativeText,
  type TextProps as ReactNativeTextProps,
} from "react-native";

export type TextProps = ReactNativeTextProps;

export function Text(props: TextProps) {
  const { colors } = useTheme();
  const { style, ...otherProps } = props;

  return (
    <ReactNativeText style={[{ color: colors.text }, style]} {...otherProps} />
  );
}
