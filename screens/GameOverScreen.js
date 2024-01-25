import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constant/colors";

import GameOverText from "../components/ui/GameOverText";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ userNumber, roundsNumber, onResetGame }) {
  return (
    <View style={styles.container}>
      <View>
        <GameOverText>Game Over</GameOverText>
      </View>
      <View>
        <Image
          source={require("../assets/images/robot.jpg")}
          style={styles.img}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.summaryText}>
          Your bot needed
          <Text style={styles.hightlightText}> {roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.hightlightText}> {userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onResetGame}> Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  img: {
    width: 350,
    height: 350,
    borderWidth: 3,
    borderRadius: 200,
    borderColor: "black",
  },
  textContainer: {
    marginVertical: 20,
  },
  summaryText: {
    fontSize: 25,
    textAlign: "center",
  },
  hightlightText: {
    color: Colors.red500,
  },
});
