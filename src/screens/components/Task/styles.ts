import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 24,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    padding: 16,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
  },
  done: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});
