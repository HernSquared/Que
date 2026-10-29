
import { Stack } from "expo-router";
import { COLORS } from "../constants/theme";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="lesson/[id]"
        options={{
          headerShown: true,
          title: "Vocabulary Lesson",
          headerTintColor: COLORS.primary,
          headerStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      />
    </Stack>
  );
}
