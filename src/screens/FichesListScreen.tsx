import React, { useEffect, useState, useContext } from "react";
import { Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { getCours } from "../data/loader";
import { ThemeContext } from "../data/ThemeContext";
import { createFichesStyles } from "../styles/fichesStyles";

export default function FichesListScreen({ navigation, route }: any) {
  const [fiches, setFiches] = useState([]);
  const [filtre, setFiltre] = useState("");
  const matiere = route.params?.matiere;

  const { theme } = useContext(ThemeContext);
  const styles = createFichesStyles(theme);

  useEffect(() => {
    const charger = async () => {
      const data = await getCours(matiere);
      setFiches(data);
    };
    charger();
  }, [matiere]);

  const fichesFiltrees = fiches.filter((fiche: any) =>
    fiche.titre.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fiches de {matiere}</Text>
      <TextInput
        placeholder="Rechercher un titre..."
        placeholderTextColor={theme.placeholder}
        value={filtre}
        onChangeText={setFiltre}
        style={{
          marginVertical: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: theme.border,
          borderRadius: 8,
          color: theme.text,
          backgroundColor: theme.card,
        }}
      />
      {fichesFiltrees.map((fiche: any, i: number) => (
        <TouchableOpacity
          key={fiche.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate("FicheDetailScreen", {
              fiches: fichesFiltrees,
              index: i,
            })
          }
        >
          <Text style={styles.cardTitle}>{fiche.titre}</Text>
          <Text style={styles.cardContent}>
            {fiche.contenu.slice(0, 100)}...
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
