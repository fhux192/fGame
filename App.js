import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground,SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./constant/colors";

export default function App() {
  const [userNumber, setUsernumber] = useState();
  const [gameIsOver,setGameIsOver]=useState(true);

  function pickNumberHandler(pickedNumber) {
    setUsernumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickedNumber={pickNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}  />;
  }

  if (gameIsOver && userNumber){
    screen=<GameOverScreen/>
  }

  return (
    <LinearGradient colors={[Colors.red600,Colors.yellow600 ]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/WallE.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        <StatusBar style="light" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
