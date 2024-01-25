import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constant/colors";

function NumberGuess({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}

export default NumberGuess;

const styles = StyleSheet.create({
  container: { marginVertical: 40 },
  line: {
    backgroundColor: Colors.yellow500,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 15,
    padding: 40,
    paddingHorizontal: 100,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
  },
  textContainer: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.red500,
    bottom: 65,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
});
