
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/theme";
import { translations } from "../constants/translations";
import { useLanguage } from "../context/LanguageContext";
import type { VocabularyWord } from "../types/vocabulary";

interface Props {
  word: VocabularyWord;
  showAnswer: boolean;
}

export default function Flashcard({
  word,
  showAnswer,
}: Props) {
  const { language } = useLanguage();
  const t = translations[language ?? "spanish"];
  const learningSpanish = language === "spanish";

  const question = learningSpanish
    ? word.english
    : word.spanish;

  const answer = learningSpanish
    ? word.spanish
    : word.english;

  const direction = learningSpanish
    ? "ENGLISH → SPANISH"
    : "ESPAÑOL → ENGLISH";

  return (
    <View style={styles.card}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          {direction}
        </Text>
      </View>

      <View style={styles.center}>
        <Text style={styles.emoji}>
          {word.emoji}
        </Text>

        <Text style={styles.word}>
          {question}
        </Text>

        <Text style={styles.description}>
          {t.flashcardPrompt}
        </Text>
      </View>

      <View style={styles.answerBox}>
        {showAnswer ? (
          <>
            <Text style={styles.answerLabel}>
              {t.translationLabel}
            </Text>

            <Text style={styles.answer}>
              {answer}
            </Text>
          </>
        ) : (
          <Text style={styles.hint}>
            {t.flashcardHint}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 26,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
  },
  badge: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  word: {
    fontSize: 38,
    fontWeight: "800",
    color: COLORS.text,
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: COLORS.secondaryText,
    marginTop: 12,
    textAlign: "center",
  },
  answerBox: {
    backgroundColor: COLORS.background,
    width: "100%",
    minHeight: 90,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  answerLabel: {
    fontSize: 11,
    color: COLORS.secondaryText,
    fontWeight: "700",
  },
  answer: {
    fontSize: 28,
    color: COLORS.success,
    fontWeight: "800",
    marginTop: 6,
    textAlign: "center",
  },
  hint: {
    color: COLORS.secondaryText,
    fontSize: 14,
  },
});
