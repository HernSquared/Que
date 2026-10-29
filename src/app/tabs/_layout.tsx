
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

import { COLORS } from "../../constants/theme";
import { translations } from "../../constants/translations";
import { useLanguage } from "../../context/LanguageContext";

type IconName =
  React.ComponentProps<typeof Ionicons>["name"];

const icons: Record<string, IconName> = {
  index: "home-outline",
  learn: "book-outline",
  games: "game-controller-outline",
  progress: "stats-chart-outline",
  profile: "person-outline",
};

export default function TabLayout() {
  const { language } = useLanguage();
  const t = translations[language ?? "spanish"];

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondaryText,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.border,
          height: 65,
          paddingTop: 6,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={icons[route.name] ?? "ellipse-outline"}
            size={size}
            color={
              typeof color === "string"
                ? color
                : COLORS.primary
            }
          />
        ),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{ title: t.home }}
      />

      <Tabs.Screen
        name="learn"
        options={{ title: t.lessons }}
      />

      <Tabs.Screen
        name="games"
        options={{ title: t.games }}
      />

      <Tabs.Screen
        name="progress"
        options={{ title: t.progress }}
      />

      <Tabs.Screen
        name="profile"
        options={{ title: t.profile }}
      />
    </Tabs>
  );
}
