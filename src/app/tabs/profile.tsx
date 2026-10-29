
import { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  useLanguage,
  type LearningLanguage,
} from "../../context/LanguageContext";

import { COLORS } from "../../constants/theme";
import { translations } from "../../constants/translations";

export default function ProfileScreen() {
  const { language, setLanguage } = useLanguage();
  const [saving, setSaving] = useState(false);

  const t = translations[language ?? "spanish"];

  async function changeLanguage(value: LearningLanguage) {
    if (saving || language === value) return;

    setSaving(true);

    try {
      await setLanguage(value);
    } catch {
      Alert.alert(t.error, t.saveError);
    } finally {
      setSaving(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {t.profileTitle}
        </Text>

        <Text style={styles.subtitle}>
          {t.profileDescription}
        </Text>

        <Text style={styles.sectionTitle}>
          {t.learningLanguage}
        </Text>

        <Pressable
          style={[
            styles.option,
            language === "spanish" && styles.selected,
          ]}
          onPress={() => changeLanguage("spanish")}
          disabled={saving}
          accessibilityRole="button"
          accessibilityState={{
            selected: language === "spanish",
          }}
        >
          <Text style={styles.flag}>🇪🇸</Text>

          <Text style={styles.optionText}>
            {t.learnSpanish}
          </Text>

          {language === "spanish" && (
            <Text style={styles.check}>✓</Text>
          )}
        </Pressable>

        <Pressable
          style={[
            styles.option,
            language === "english" && styles.selected,
          ]}
          onPress={() => changeLanguage("english")}
          disabled={saving}
          accessibilityRole="button"
          accessibilityState={{
            selected: language === "english",
          }}
        >
          <Text style={styles.flag}>🇺🇸</Text>

          <Text style={styles.optionText}>
            {t.learnEnglish}
          </Text>

          {language === "english" && (
            <Text style={styles.check}>✓</Text>
          )}
        </Pressable>

        <Text style={styles.note}>
          {t.languageNote}
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
  content: {
    flex: 1,
    padding: 24,
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.text,
  },
  subtitle: {
    color: COLORS.secondaryText,
    fontSize: 15,
    marginTop: 8,
    marginBottom: 36,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 16,
  },
  option: {
    backgroundColor: COLORS.surface,
    padding: 20,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
  },
  flag: {
    fontSize: 30,
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.text,
  },
  check: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.primary,
  },
  note: {
    fontSize: 13,
    color: COLORS.secondaryText,
    marginTop: 12,
    lineHeight: 20,
  },
});
