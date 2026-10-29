
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LessonCard from "../../components/LessonCard";
import { COLORS } from "../../constants/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>Qué!</Text>
          <View style={styles.streak}>
            <Text>🔥 0</Text>
          </View>
        </View>

        <Text style={styles.eyebrow}>
          YOUR LANGUAGE JOURNEY
        </Text>
        <Text style={styles.heading}>
          Let's learn something new.
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons
              name="book-outline"
              size={26}
              color={COLORS.primary}
            />
            <Text style={styles.statValue}>0 / 10</Text>
            <Text style={styles.statLabel}>
              Lessons completed
            </Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons
              name="trophy-outline"
              size={26}
              color={COLORS.warning}
            />
            <Text style={styles.statValue}>A1</Text>
            <Text style={styles.statLabel}>
              Beginner level
            </Text>
          </View>
        </View>

        <LessonCard
          title="Everyday Words"
          description="Learn your first 10 Spanish words."
          lessonId="1"
        />

        <Text style={styles.sectionTitle}>
          Explore
        </Text>

        <View style={styles.exploreRow}>
          <Pressable
            style={styles.exploreCard}
            onPress={() => router.push("../tabs/learn")}
          >
            <Ionicons
              name="book-outline"
              size={28}
              color={COLORS.primary}
            />
            <Text style={styles.exploreText}>
              Lessons →
            </Text>
          </Pressable>

          <Pressable
            style={styles.exploreCard}
            onPress={() => router.push("/tabs/games")}
          >
            <Ionicons
              name="game-controller-outline"
              size={28}
              color={COLORS.success}
            />
            <Text style={styles.exploreText}>
              Games →
            </Text>
          </Pressable>
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
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 34,
  },
  logo: {
    fontSize: 32,
    fontWeight: "900",
    color: COLORS.primary,
  },
  streak: {
    backgroundColor: COLORS.surface,
    padding: 12,
    borderRadius: 20,
  },
  eyebrow: {
    color: COLORS.secondaryText,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  heading: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: "800",
    marginTop: 8,
    marginBottom: 24,
    lineHeight: 38,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    padding: 18,
    borderRadius: 20,
    gap: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.text,
  },
  statLabel: {
    color: COLORS.secondaryText,
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: COLORS.text,
    marginTop: 30,
    marginBottom: 14,
  },
  exploreRow: {
    flexDirection: "row",
    gap: 12,
  },
  exploreCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  exploreText: {
    color: COLORS.text,
    fontWeight: "700",
    fontSize: 16,
  },
});
