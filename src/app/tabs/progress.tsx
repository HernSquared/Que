
import PlaceholderScreen from "../../components/PlaceholderScreen";

import { translations } from "../../constants/translations";
import { useLanguage } from "../../context/LanguageContext";

export default function ProgressScreen() {
  const { language } = useLanguage();
  const t = translations[language ?? "spanish"];

  return (
    <PlaceholderScreen
      title={t.progressTitle}
      emoji="📊"
      description={
        `${t.progressDescription}\n\n` +
        t.progressComingSoonDescription
      }
    />
  );
}
