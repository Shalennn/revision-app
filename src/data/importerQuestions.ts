import AsyncStorage from "@react-native-async-storage/async-storage";

// importer tous les fichiers de questions dans ./assets/question//


import reseaux from "../../assets/questions/reseaux.json";
import rgpd from "../../assets/questions/rgpd.json";
import vpn from "../../assets/questions/vpn.json";

const FILES = [reseaux, rgpd, vpn];

export async function importerQuestionsSiVide() {
  const existantes = await AsyncStorage.getItem("questions");
  if (existantes) return;

  let toutes: any[] = [];

  for (const contenu of FILES) {
    const questions = contenu.map((q: any) => ({
      id: q.id,
      question: q.question,
      reponses: q.reponses,
      bonne_reponse: q.bonne_reponse,
      matiere: q.matiere,
      niveau: q.niveau ?? 1,
      dernierPassage: q.dernierPassage ?? null,
    }));
    toutes.push(...questions);
  }

  await AsyncStorage.setItem("questions", JSON.stringify(toutes));
}
