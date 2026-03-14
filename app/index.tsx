import Container from "@/components/Container";
import { colors } from "@/style/colors";
import { StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <Container>
      <Text style={styles.title}>Python lernen!</Text>
      <Text style={styles.subtitle}>Willkommen zur Lernplattform</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary["900"],
  },
  subtitle: {
    fontSize: 15,
    marginTop: 5,
  },
});
