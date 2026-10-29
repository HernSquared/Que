
export const translations = {
  // User is learning Spanish.
  // Interface is displayed in English.
  spanish: {
    // Navigation
    home: "Home",
    lessons: "Learn",
    games: "Games",
    progress: "Progress",
    profile: "Profile",

    // Home dashboard
    journey: "YOUR SPANISH JOURNEY 🇪🇸",
    greeting: "Let's learn something new.",
    lessonsCompleted: "Lessons completed",
    beginnerLevel: "Beginner level",
    dailyStreak: "Daily streak",
    explore: "Explore",

    // Vocabulary lessons
    lessonTitle: "Everyday Words",
    lessonDescription: "Learn your first 10 Spanish words.",
    lessonLevel: "Beginner A1",
    lessonNumber: "LESSON 01",
    lessonHeader: "Vocabulary Lesson",
    startLearning: "Start Learning",
    lessonNotFound: "Lesson not found.",
    wordCounter: "Word",
    of: "of",
    revealTranslation: "Reveal Translation",
    nextWord: "Next Word",
    finishLesson: "Finish Lesson",
    lessonComplete: "Lesson Complete!",
    completeDescription: "You reviewed all {count} words!",
    backToLearning: "Back to Learning",
    practiceAgain: "Practice Again",

    // Flashcards
    translationDirection: "ENGLISH → SPANISH",
    translationLabel: "SPANISH TRANSLATION",
    flashcardPrompt: "How do you say this in Spanish?",
    flashcardHint: "Tap below to reveal",

    // Games
    gamesTitle: "Language Games",
    gamesDescription: "Practice vocabulary through fun word games.",
    gamesComingSoon: "Games are coming soon!",
    gamesComingSoonDescription:
      "Word Scramble, Word Search, and more games will be available here.",

    // Progress
    progressTitle: "Your Progress",
    progressDescription: "Track your language learning journey.",
    wordsLearned: "Words learned",
    completedLessons: "Completed lessons",
    currentLevel: "Current level",
    progressComingSoon: "Progress tracking is coming soon!",
    progressComingSoonDescription:
      "Your learning statistics and achievements will appear here.",

    // Profile
    profileTitle: "Your Profile",
    profileDescription: "Customize your learning experience.",
    learningLanguage: "Learning Language",
    learnSpanish: "Learn Spanish",
    learnEnglish: "Learn English",
    languageNote:
      "You can change your learning language at any time.",
    settings: "Settings",
    about: "About Qué!",
    saveError: "Unable to save your language preference.",
    error: "Error",
  },

  // User is learning English.
  // Interface is displayed in Spanish.
  english: {
    // Navigation
    home: "Inicio",
    lessons: "Aprender",
    games: "Juegos",
    progress: "Progreso",
    profile: "Perfil",

    // Home dashboard
    journey: "APRENDIENDO INGLÉS 🇺🇸",
    greeting: "Aprendamos algo nuevo.",
    lessonsCompleted: "Lecciones completadas",
    beginnerLevel: "Nivel principiante",
    dailyStreak: "Racha diaria",
    explore: "Explorar",

    // Vocabulary lessons
    lessonTitle: "Palabras cotidianas",
    lessonDescription: "Aprende tus primeras 10 palabras en inglés.",
    lessonLevel: "Principiante A1",
    lessonNumber: "LECCIÓN 01",
    lessonHeader: "Lección de vocabulario",
    startLearning: "Comenzar lección",
    lessonNotFound: "Lección no encontrada.",
    wordCounter: "Palabra",
    of: "de",
    revealTranslation: "Mostrar traducción",
    nextWord: "Siguiente palabra",
    finishLesson: "Finalizar lección",
    lessonComplete: "¡Lección completada!",
    completeDescription: "¡Repasaste las {count} palabras!",
    backToLearning: "Volver a aprender",
    practiceAgain: "Practicar de nuevo",

    // Flashcards
    translationDirection: "ESPAÑOL → ENGLISH",
    translationLabel: "TRADUCCIÓN AL INGLÉS",
    flashcardPrompt: "¿Cómo se dice esto en inglés?",
    flashcardHint: "Toca abajo para revelar",

    // Games
    gamesTitle: "Juegos de palabras",
    gamesDescription: "Practica vocabulario con juegos divertidos.",
    gamesComingSoon: "¡Próximamente tendremos juegos!",
    gamesComingSoonDescription:
      "Aquí encontrarás palabras revueltas, sopas de letras y más juegos.",

    // Progress
    progressTitle: "Tu progreso",
    progressDescription: "Sigue tu aprendizaje de idiomas.",
    wordsLearned: "Palabras aprendidas",
    completedLessons: "Lecciones completadas",
    currentLevel: "Nivel actual",
    progressComingSoon: "¡Pronto podrás ver tu progreso!",
    progressComingSoonDescription:
      "Aquí aparecerán tus estadísticas y logros de aprendizaje.",

    // Profile
    profileTitle: "Tu perfil",
    profileDescription: "Personaliza tu experiencia de aprendizaje.",
    learningLanguage: "Idioma que quieres aprender",
    learnSpanish: "Aprender español",
    learnEnglish: "Aprender inglés",
    languageNote:
      "Puedes cambiar el idioma que estás aprendiendo cuando quieras.",
    settings: "Configuración",
    about: "Acerca de Qué!",
    saveError: "No se pudo guardar tu preferencia de idioma.",
    error: "Error",
  },
} as const;
