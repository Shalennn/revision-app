import { Text, TouchableOpacity, ScrollView } from "react-native";
import { getListeMatieres, getCours } from "../data/loader";
import { useContext } from "react";
import { ThemeContext } from "../data/ThemeContext";
import { createHomeStyles } from "../styles/homeStyles";

export default function SelectionMatiereFiches({ navigation }: any) {
  const matieres = getListeMatieres();
  const { theme } = useContext(ThemeContext);
  const styles = createHomeStyles(theme);

  const handlePress = async (matiere: string) => {
    const fiches = await getCours(matiere);
    if (fiches.length > 0) {
      navigation.navigate("FicheDetail", { fiches, index: 0 });
    }
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choisir une matière :</Text>
      {matieres.map((matiere) => (
        <TouchableOpacity key={matiere} style={styles.button} 
        onPress={() => navigation.navigate("FichesListScreen", { matiere })}>
          <Text style={styles.buttonText}>{matiere}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
