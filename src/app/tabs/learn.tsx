
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import LessonCard from "../../components/LessonCard";
import { COLORS } from "../../constants/theme";
import { translations } from "../../constants/translations";
import { useLanguage } from "../../context/LanguageContext";

export default function LearnScreen() {
  const { language } = useLanguage();
  const t = translations[language ?? "spanish"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          {t.lessons}
        </Text>

        <Text style={styles.subtitle}>
          {t.lessonLevel}
        </Text>

        <View style={styles.lessonContainer}>
          <LessonCard
            lessonId="1"
            title={t.lessonTitle}
            description={t.lessonDescription}
            buttonLabel={t.startLearning}
            lessonLabel={t.lessonNumber}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 24,
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.secondaryText,
    marginTop: 8,
  },
  lessonContainer: {
    marginTop: 28,
  },
});
