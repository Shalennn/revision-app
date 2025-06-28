import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getQuestionJournaliere, majProgressionQuestion } from "../data/exerciceManager";
import { importerQuestionsSiVide } from "../data/importerQuestions";
import { ThemeContext } from "../data/ThemeContext";
import { exerciceStyles as styles } from "../styles/exercicesStyles";

export default function ExerciceScreen() {
  const { theme } = useContext(ThemeContext);
  const [questions, setQuestions] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [questionChoisie, setquestionChoisie] = useState<number | null>(null);

  useEffect(() => {
    const charger = async () => {
      await importerQuestionsSiVide();
      const q = await getQuestionJournaliere();
      setQuestions(q);
    };
    charger();
  }, []);

  const questionActuelle = questions[index];
  const montrerReponse = questionChoisie !== null;

  const handleAnswer = (i: number) => {
    if (montrerReponse) return;
    setquestionChoisie(i);
  };

  const repondre = async (niveau: "facile" | "moyen" | "difficile") => {
    await majProgressionQuestion(questionActuelle.id, niveau);
    setquestionChoisie(null);
    setIndex((prev) => prev + 1);
  };

  if (!questionActuelle) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.noQuestionText, { color: theme.subtext }]}>
          Aucune question à réviser aujourd'hui.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.questionText, { color: theme.text }]}>
        {questionActuelle.question}
      </Text>

      {questionActuelle.reponses?.map((rep: string, i: number) => {
        let backgroundColor = theme.card;
        if (montrerReponse) {
          if (i === questionActuelle.bonne_reponse) {
            backgroundColor = "#19875433";
          } else if (i === questionChoisie && i !== questionActuelle.bonne_reponse) {
            backgroundColor = "#DC354533";
          }
        }

        return (
          <TouchableOpacity
            key={i}
            onPress={() => handleAnswer(i)}
            disabled={montrerReponse}
            style={{
              padding: 12,
              borderRadius: 6,
              backgroundColor,
              borderWidth: 1,
              borderColor: theme.border,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: theme.text }}>{rep}</Text>
          </TouchableOpacity>
        );
      })}

      {montrerReponse && (
        <>
          <Text style={[styles.evaluateText, { color: theme.text }]}>
            Évaluer la difficulté :
          </Text>
          <TouchableOpacity style={[styles.button, styles.easy]} onPress={() => repondre("facile")}>
            <Text style={styles.buttonText}>Facile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.medium]} onPress={() => repondre("moyen")}>
            <Text style={styles.buttonText}>Moyen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.hard]} onPress={() => repondre("difficile")}>
            <Text style={styles.buttonText}>Difficile</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
