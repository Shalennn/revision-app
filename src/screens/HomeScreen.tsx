import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../data/ThemeContext";
import { createHomeStyles } from "../styles/homeStyles";

export default function HomeScreen({ navigation }: any) {
  const { toggleTheme, isDark, theme } = useContext(ThemeContext);
  const styles = createHomeStyles(theme);

  return (
<View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>Bienvenue dans votre application de révision</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectionMatiereFiches")}>
        <Text style={styles.buttonText}>Les Cours</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ExerciceScreen")}>
        <Text style={styles.buttonText}>Les Exercices</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleTheme} style={[styles.themeToggleButton]}>
  <Text style={styles.themeToggleText}>
    Passer en mode {isDark ? "Clair" : "Sombre"}
  </Text>
</TouchableOpacity>

    </View>
  );
}
