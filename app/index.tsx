import { colors } from "@/style/colors";
import { layout } from "@/style/layout";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={[layout.container, { backgroundColor: colors.primary[50] }]}>
      <Text style={styles.heading1}>Python lernen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading1: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary[900],
  },
});
