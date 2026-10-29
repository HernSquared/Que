
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";

import Flashcard from "../../components/Flashcard";
import ProgressBar from "../../components/ProgressBar";
import { COLORS } from "../../constants/theme";
import { translations } from "../../constants/translations";
import { useLanguage } from "../../context/LanguageContext";
import { vocabulary } from "../../data/vocabulary";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { language } = useLanguage();

  const t = translations[language ?? "spanish"];

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentWord = vocabulary[index];

  const progress = completed
    ? 100
    : ((index + 1) / vocabulary.length) * 100;

  function handleNext() {
    if (!showAnswer) {
      setShowAnswer(true);
      return;
    }

    if (index === vocabulary.length - 1) {
      setCompleted(true);
    } else {
      setIndex((prev) => prev + 1);
      setShowAnswer(false);
    }
  }

  function handleRestart() {
    setIndex(0);
    setShowAnswer(false);
    setCompleted(false);
  }

  if (id !== "1") {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notFound}>
          <Text style={styles.lessonTitle}>
            {t.lessonNotFound}
          </Text>

          <Pressable onPress={() => router.back()}>
            <Text style={styles.link}>
              {t.backToLearning}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const buttonLabel = completed
    ? t.backToLearning
    : !showAnswer
    ? t.revealTranslation
    : index === vocabulary.length - 1
    ? t.finishLesson
    : t.nextWord;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Lesson progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.lessonTitle}>
              {t.lessonTitle}
            </Text>

            <Text style={styles.counter}>
              {completed
                ? "✓"
                : `${index + 1} / ${vocabulary.length}`}
            </Text>
          </View>

          <ProgressBar progress={progress} />
        </View>

        {/* Vocabulary card */}
        {completed ? (
          <View style={styles.completeCard}>
            <Text style={styles.celebration}>🎉</Text>

            <Text style={styles.completeTitle}>
              {t.lessonComplete}
            </Text>

            <Text style={styles.completeDescription}>
                {t.completeDescription.replace(
                  "{count}",
                  String(vocabulary.length)
                )}
            </Text>

            <Pressable onPress={handleRestart}>
              <Text style={styles.link}>
                {t.practiceAgain}
              </Text>
            </Pressable>
          </View>
        ) : (
          <Flashcard
            word={currentWord}
            showAnswer={showAnswer}
          />
        )}

        {/* Main action button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
          ]}
          onPress={
            completed ? () => router.back() : handleNext
          }
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>
            {buttonLabel} →
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  progressSection: {
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.text,
  },
  counter: {
    color: COLORS.secondaryText,
    fontSize: 14,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 22,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.85,
  },
  completeCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  celebration: {
    fontSize: 70,
    marginBottom: 20,
  },
  completeTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.text,
    textAlign: "center",
  },
  completeDescription: {
    fontSize: 16,
    color: COLORS.secondaryText,
    marginTop: 12,
    textAlign: "center",
    lineHeight: 24,
  },
  link: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "700",
    marginTop: 24,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
