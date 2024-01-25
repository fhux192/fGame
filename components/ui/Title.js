import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constant/colors";

function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow500,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 15,
    borderWidth: 3,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
  },
  titleContainer: {
    textAlign: "center",
    color: Colors.red500,
    fontSize: 25,
    fontWeight: "bold",
    padding: 25,
  },
});
