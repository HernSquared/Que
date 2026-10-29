
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const vocabulary = [
  { english: "Hello", spanish: "Hola" },
  { english: "Goodbye", spanish: "Adiós" },
  { english: "Thank you", spanish: "Gracias" },
  { english: "House", spanish: "Casa" },
  { english: "Book", spanish: "Libro" },
  { english: "Water", spanish: "Agua" },
  { english: "Cat", spanish: "Gato" },
  { english: "Dog", spanish: "Perro" },
  { english: "Apple", spanish: "Manzana" },
  { english: "Friend", spanish: "Amigo" },
];

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentWord = vocabulary[index];

  function nextWord() {
    setIndex((previous) =>
      (previous + 1) % vocabulary.length
    );
    setShowAnswer(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bilingual</Text>

        <Text style={styles.subtitle}>
          Learn Spanish through games!
        </Text>

        <View style={styles.progressContainer}>
          <Text style={styles.progress}>
            Lesson 1: Everyday Words
          </Text>

          <Text style={styles.progress}>
            Word {index + 1} of {vocabulary.length}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>
            Translate this word:
          </Text>

          <Text style={styles.word}>
            {currentWord.english}
          </Text>

          {showAnswer ? (
            <Text style={styles.answer}>
              {currentWord.spanish}
            </Text>
          ) : (
            <Text style={styles.hint}>
              Tap below to reveal
            </Text>
          )}
        </View>

        <Pressable
          style={styles.button}
          onPress={() => setShowAnswer(true)}
        >
          <Text style={styles.buttonText}>
            Show Translation
          </Text>
        </Pressable>

        <Pressable
          style={styles.nextButton}
          onPress={nextWord}
        >
          <Text style={styles.buttonText}>
            Next Word
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2563EB",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    color: "#64748B",
  },
  progressContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  progress: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
    color: "#334155",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 220,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: "#64748B",
  },
  word: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    color: "#0F172A",
  },
  answer: {
    fontSize: 30,
    color: "#16A34A",
    marginTop: 20,
    fontWeight: "bold",
  },
  hint: {
    fontSize: 14,
    color: "#94A3B8",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },
  nextButton: {
    backgroundColor: "#0F172A",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
