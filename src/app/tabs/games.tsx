
import PlaceholderScreen from "../../components/PlaceholderScreen";

import { translations } from "../../constants/translations";
import { useLanguage } from "../../context/LanguageContext";

export default function GamesScreen() {
  const { language } = useLanguage();
  const t = translations[language ?? "spanish"];

  return (
    <PlaceholderScreen
      title={t.gamesTitle}
      emoji="🎮"
      description={
        `${t.gamesDescription}\n\n` +
        t.gamesComingSoonDescription
      }
    />
  );
}
