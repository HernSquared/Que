
import { router } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS } from "../constants/theme";


interface Props {
  title: string;
  description: string;
  lessonId: string;
  buttonLabel?: string;
  lessonLabel?: string;
}

export default function LessonCard({
  title,
  description,
  lessonId,
  buttonLabel = "Start Learning",
  lessonLabel = "LESSON 01",
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{lessonLabel}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
        {description}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.85 },
        ]}
        onPress={() =>
          router.push({
            pathname: "/lesson/[id]",
            params: { id: lessonId },
          })
        }
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>
          {buttonLabel}  →
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    padding: 22,
  },
  label: {
    color: "#DDE5FF",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },
  description: {
    color: "#E4E9FF",
    marginTop: 8,
    marginBottom: 24,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: "700",
  },
});
