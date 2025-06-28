import { StyleSheet } from "react-native";

export const createHomeStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      padding: 20,
      marginBottom: 5,
      flex: 1,
      backgroundColor: theme.background,
    },
    button: {
      backgroundColor: theme.primary,
      paddingVertical: 14,
      borderRadius: 10,
      marginVertical: 8,
      alignItems: "center",
    },
    buttonText: {
      color: theme.buttonText,
      fontSize: 16,
      fontWeight: "600",
    },
    title: {
      fontSize: 22,
      fontWeight: "600",
      marginBottom: 20,
      color: theme.text,
    },
    subjectButton: {
      padding: 14,
      backgroundColor: theme.secondary,
      borderRadius: 10,
      marginBottom: 12,
      alignItems: "center",
    },
    subjectButtonText: {
      fontSize: 18,
      color: theme.text,
      fontWeight: "500",
    },
    themeToggleButton: {
      marginTop: 20,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: theme.primary,
      alignSelf: "center",
    },
    
    themeToggleText: {
      color: "#FFF",
      fontWeight: "600",
      fontSize: 16,
    },
    
  });
