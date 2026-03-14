import { colors } from "@/style/colors";
import { layout } from "@/style/layout";
import React from "react";
import { View, ViewProps } from "react-native";

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

export default function Container({
  children,
  style,
  ...props
}: ContainerProps) {
  return (
    <View
      style={[
        layout.container,
        { backgroundColor: colors.primary["50"] },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
