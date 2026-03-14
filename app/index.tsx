import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Python lernen</Text>
      <Text style={styles.heading2}>
        Willkommen zu einigen wertvollen Lektionen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  heading1: {
    fontSize: 32,
    fontWeight: "semibold",
  },
  heading2: {
    fontSize: 16,
    marginTop: 10,
  },
});
