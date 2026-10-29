
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export type LearningLanguage = "spanish" | "english";

interface LanguageContextType {
  language: LearningLanguage | null;
  loading: boolean;
  setLanguage: (value: LearningLanguage) => Promise<void>;
}

const STORAGE_KEY = "que_learning_language";

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, updateLanguage] =
    useState<LearningLanguage | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLanguage() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);

        if (saved === "spanish" || saved === "english") {
          updateLanguage(saved);
        }
      } catch (error) {
        console.error("Failed to load language:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLanguage();
  }, []);

  async function setLanguage(value: LearningLanguage) {
    await AsyncStorage.setItem(STORAGE_KEY, value);
    updateLanguage(value);
  }

  return (
    <LanguageContext.Provider
      value={{ language, loading, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
