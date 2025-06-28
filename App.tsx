import React, { useContext } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider, ThemeContext } from "./src/data/ThemeContext";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomeScreen from "./src/screens/HomeScreen";
import SelectionMatiereFiches from "./src/screens/SelectionMatiereFiches";
import FicheDetailScreen from "./src/screens/FichesDetailsScreen";
import FichesListScreen from "./src/screens/FichesListScreen";
import ExerciceScreen from "./src/screens/ExerciceScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <ThemedApp />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme, isDark } = useContext(ThemeContext);

  const navigationTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...((isDark ? DarkTheme : DefaultTheme).colors),
      background: theme.background,
      card: theme.background,
      text: theme.text,
    },
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerTintColor: theme.text,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {/* Chemin de navigation entre les fichiers !  */}
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Accueil" }} />
          <Stack.Screen name="SelectionMatiereFiches" component={SelectionMatiereFiches} options={{ title: "Sélection des matières" }} />
          <Stack.Screen name="ExerciceScreen" component={ExerciceScreen} options={{ title: "Exercices" }} />
          <Stack.Screen name="FicheDetailScreen" component={FicheDetailScreen} options={{ title: "Fiches détaillées" }} />
          <Stack.Screen name="FichesListScreen" component={FichesListScreen} options={{ title: "Fiches de cours" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
