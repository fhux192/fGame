import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import NumberGuess from "../components/game/NumberGuess";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constant/colors";
import Title from "../components/ui/Title";
import GuessItem from "../components/game/GuessItems";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 1000;
const numColumns = 3;

function GameScreen({ userNumber, onGameOver, onGameCount }) {
  const intitalGuess = generateRandomBetween(1, 1000, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intitalGuess);
  const [guessedNumber, setGuessedNumber] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 1000;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "It's not truth!!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    onGameCount();
    setGuessedNumber((currentGuessNum) => [
      ...currentGuessNum,
      { text: currentGuess, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponent's Guess</Title>
      </View>
      <View>
        <NumberGuess>{currentGuess}</NumberGuess>
      </View>
      <View style={styles.boxContainer}>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove-circle" size={25} color={Colors.red600} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add-circle" size={25} color={Colors.red600} />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <FlatList
        data={guessedNumber}
        numColumns={numColumns}
        alwaysBounceHorizontal={false}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={(itemData) => <GuessItem text={itemData.item.text} />}
      />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  boxContainer: {
    borderRadius: 15,
    backgroundColor: Colors.red500,
    borderWidth: 3,
    height: 100,
    width: "85%",
    bottom: 95,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    padding: 10,
  },
});
