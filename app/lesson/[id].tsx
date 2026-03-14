import Container from "@/components/Container";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Lesson() {
  const { id } = useLocalSearchParams();
  return (
    <Container>
      <Text>{id}</Text>
    </Container>
  );
}
