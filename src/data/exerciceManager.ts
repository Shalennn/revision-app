import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getQuestionJournaliere(): Promise<any[]> {
  const allQuestionsRaw = await AsyncStorage.getItem("questions");
  if (!allQuestionsRaw) return [];
  const allQuestions = JSON.parse(allQuestionsRaw);
  const today = new Date();
  return allQuestions.filter((q: any) => {
    if (!q.dernierPassage) return true;
    const next = new Date(q.dernierPassage);
    next.setDate(next.getDate() + getDelai(q.niveau));
    return next <= today;
  });
}

export async function majProgressionQuestion(id: string, niveau: "facile" | "moyen" | "difficile") {
  const raw = await AsyncStorage.getItem("questions");
  if (!raw) return;
  let questions = JSON.parse(raw);
  const index = questions.findIndex((q: any) => q.id === id);
  if (index === -1) return;
  const niveauNum = {
    difficile: Math.max(1, (questions[index].niveau || 0)),
    moyen: Math.max(2, (questions[index].niveau || 1)),
    facile: Math.min(questions[index].niveau + 1 || 3, 5),
  };

  questions[index].niveau = niveauNum[niveau];
  questions[index].dernierPassage = new Date().toISOString();
  await AsyncStorage.setItem("questions", JSON.stringify(questions));
}

function getDelai(niveau: number): number {
  if (niveau >= 4) return 7;
  if (niveau === 3) return 4;
  if (niveau === 2) return 2;
  return 1;
}
