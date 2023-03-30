import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  logo: {
    marginTop: 70,
    marginBottom: 67,
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#0D0D0D",
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#808080",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -27,
    marginBottom: 42,
    paddingHorizontal: 24,
  },
  listEmptyTextBold: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
  },
  listEmptyContainer: {
    alignItems: "center",
    paddingHorizontal: 24,
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
  },
  tasksCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  taskCountContainer: {
    flexDirection: "row",
  },
  taskCountCreated: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  taskCountFinished: {
    color: "#8284FA",
    fontWeight: "bold",
  },
  taskCountCreatedNumber: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 100,
    fontWeight: "bold",
    fontSize: 12,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#333333",
    marginBottom: 48,
  },
});
