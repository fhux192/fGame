import { Text, View, StyleSheet } from "react-native";

function GameOverText({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default GameOverText;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "white",
    padding: 20,
    marginTop: 60,
    marginBottom: 30,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
  },
  text: {
    fontSize: 30,
    color: "white",
  },
});
