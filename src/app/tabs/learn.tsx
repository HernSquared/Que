
import { StyleSheet, View } from "react-native";
import LessonCard from "../../components/LessonCard";
import { COLORS } from "../../constants/theme";

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <LessonCard
        lessonId="1"
        title="Everyday Words"
        description="Beginner A1 · 10 vocabulary words"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    paddingTop: 60,
  },
});
