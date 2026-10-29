
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { COLORS } from "../../constants/theme";

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
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor:
          COLORS.secondaryText,
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
                  typeof color === "string" ? color : COLORS.primary
                }
          />
        ),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="learn"
        options={{ title: "Learn" }}
      />
      <Tabs.Screen
        name="games"
        options={{ title: "Games" }}
      />
      <Tabs.Screen
        name="progress"
        options={{ title: "Progress" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile" }}
      />
    </Tabs>
  );
}
// import { Tabs } from "expo-router";

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen name="index" options={{ title: "Home" }} />
//       <Tabs.Screen name="learn" options={{ title: "Learn" }} />
//       <Tabs.Screen name="games" options={{ title: "Games" }} />
//       <Tabs.Screen name="progress" options={{ title: "Progress" }} />
//       <Tabs.Screen name="profile" options={{ title: "Profile" }} />
//     </Tabs>
//   );
// }