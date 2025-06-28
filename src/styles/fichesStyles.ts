import { StyleSheet } from "react-native";

export const createFichesStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 12,
      color: theme.text,
    },
    card: {
      padding: 16,
      backgroundColor: theme.card,
      borderRadius: 8,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme.border,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.text,
    },
    cardContent: {
      fontSize: 14,
      color: theme.subtext,
      marginTop: 6,
    },
    detailContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.background,
    },
    detailTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      color: theme.text,
    },
    detailContent: {
      fontSize: 16,
      lineHeight: 22,
      color: theme.subtext,
    },
  });
