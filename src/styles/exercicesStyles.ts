import { StyleSheet } from "react-native";

export const exerciceStyles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  questionText: {
    fontSize: 20,
    marginBottom: 24,
    fontWeight: "bold",
  },
  evaluateText: {
    fontSize: 16,
    marginBottom: 12,
  },
  noQuestionText: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
  },
  easy: {
    backgroundColor: "#198754",
  },
  medium: {
    backgroundColor: "#FFC107",
  },
  hard: {
    backgroundColor: "#DC3545",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
