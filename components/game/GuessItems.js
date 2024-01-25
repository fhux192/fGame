import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constant/colors";

function GuessItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.goalItems}></View>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GuessItem;

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
  goalItems: {
    alignItems: "center",
    width: "100%",
    height: "20%",
    borderRadius: 100,
    borderColor: "black",
    backgroundColor: Colors.yellow500,
    padding: 45,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
  },
  goalText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    bottom: 62,
    color: Colors.red500,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
});
