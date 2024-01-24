import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../../constant/colors";
function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.textContainer}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 15,
    borderWidth: 3,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.yellow500,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textContainer: {
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.85,
  },
});
