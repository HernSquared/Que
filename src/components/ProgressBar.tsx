
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/theme";

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  const safeProgress = Math.min(
    100,
    Math.max(0, progress)
  );

  return (
    <View style={styles.track}>
      <View
        style={[
          styles.fill,
          { width: `${safeProgress}%` },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 9,
    backgroundColor: COLORS.border,
    borderRadius: 10,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
});
