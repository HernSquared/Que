
import { Stack } from "expo-router";

import {
  LanguageProvider,
  useLanguage,
} from "../context/LanguageContext";

import { COLORS } from "../constants/theme";
import { translations } from "../constants/translations";

function AppNavigator() {
  const { language } = useLanguage();
  const t = translations[language ?? "spanish"];

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen name="index" />

      <Stack.Screen name="tabs" />

      <Stack.Screen
        name="lesson/[id]"
        options={{
          headerShown: true,
          title: t.lessonHeader,
          headerTintColor: COLORS.primary,
          headerStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <AppNavigator />
    </LanguageProvider>
  );
}
