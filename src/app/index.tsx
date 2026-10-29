
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { router } from "expo-router";
import {
    useLanguage,
    type LearningLanguage,
} from "../context/LanguageContext";

import { COLORS } from "../constants/theme";

export default function LanguageSelectionScreen() {
  const { language, loading, setLanguage } = useLanguage();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && language) {
      router.replace("/tabs");
    }
  }, [loading, language]);

  async function handleSelection(value: LearningLanguage) {
    if (saving) return;

    setSaving(true);

    try {
      await setLanguage(value);
      router.replace("/tabs");
    } catch (error) {
      console.error("Failed to save language:", error);
      setSaving(false);
    }
  }

  if (loading || language) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🌎</Text>
          </View>

          <Text style={styles.logo}>Qué</Text>

          <Text style={styles.tagline}>
            Your language journey starts here.
          </Text>
        </View>

        <View style={styles.selectionSection}>
          <Text style={styles.title}>
            What would you like to learn?
          </Text>

          <Text style={styles.subtitle}>
            Choose your language to get started.
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.languageCard,
              pressed && styles.pressed,
            ]}
            onPress={() => handleSelection("spanish")}
            disabled={saving}
          >
            <View style={styles.flagContainer}>
              <Text style={styles.flag}>🇪🇸</Text>
            </View>

            <View style={styles.languageInfo}>
              <Text style={styles.languageTitle}>
                Learn Spanish
              </Text>
              <Text style={styles.languageSubtitle}>
                English → Español
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.languageCard,
              pressed && styles.pressed,
            ]}
            onPress={() => handleSelection("english")}
            disabled={saving}
          >
            <View style={styles.flagContainer}>
              <Text style={styles.flag}>🇺🇸</Text>
            </View>

            <View style={styles.languageInfo}>
              <Text style={styles.languageTitle}>
                Learn English
              </Text>
              <Text style={styles.languageSubtitle}>
                Español → English
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          {saving && (
            <ActivityIndicator color={COLORS.primary} />
          )}
        </View>

        <Text style={styles.footer}>
          ✓ You can change languages anytime.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  header: {
    alignItems: "center",
    marginTop: 28,
  },
  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: COLORS.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  logoEmoji: {
    fontSize: 44,
  },
  logo: {
    fontSize: 42,
    fontWeight: "900",
    color: COLORS.primary,
  },
  tagline: {
    fontSize: 15,
    color: COLORS.secondaryText,
    marginTop: 8,
    textAlign: "center",
  },
  selectionSection: {
    gap: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.text,
    textAlign: "center",
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.secondaryText,
    textAlign: "center",
    marginBottom: 20,
  },
  languageCard: {
    backgroundColor: COLORS.surface,
    padding: 18,
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  flagContainer: {
    backgroundColor: COLORS.background,
    width: 62,
    height: 62,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    fontSize: 32,
  },
  languageInfo: {
    flex: 1,
    marginLeft: 14,
  },
  languageTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.text,
  },
  languageSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 13,
    marginTop: 5,
  },
  arrow: {
    fontSize: 32,
    color: COLORS.secondaryText,
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  footer: {
    color: COLORS.secondaryText,
    fontSize: 13,
    textAlign: "center",
  },
});
