
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
import { vocabulary } from "../../data/vocabulary";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

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

  if (id !== "1") {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Lesson not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.lessonTitle}>
              Everyday Words
            </Text>

            <Text style={styles.counter}>
              {completed
                ? "Completed"
                : `${index + 1} / ${vocabulary.length}`}
            </Text>
          </View>

          <ProgressBar progress={progress} />
        </View>

        {completed ? (
          <View style={styles.completeCard}>
            <Text style={styles.celebration}>🎉</Text>
            <Text style={styles.completeTitle}>
              Lesson Complete!
            </Text>
            <Text style={styles.completeDescription}>
              You reviewed all {vocabulary.length} words!
            </Text>
          </View>
        ) : (
          <Flashcard
            word={currentWord}
            showAnswer={showAnswer}
          />
        )}

        <Pressable
          style={styles.button}
          onPress={
            completed ? () => router.back() : handleNext
          }
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>
            {completed
              ? "Back to Learning"
              : !showAnswer
              ? "Reveal Translation"
              : index === vocabulary.length - 1
              ? "Finish Lesson"
              : "Next Word →"}
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
  },
});
