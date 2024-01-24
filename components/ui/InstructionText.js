import { View, Text,StyleSheet } from "react-native";
import Colors from "../../constant/colors";

function InstructionText({ children }) {
  return (
    <View>
      <Text style={styles.textCotainer}>{children}</Text>
    </View>
  );
}

export default InstructionText;

const styles=StyleSheet.create({
    textCotainer:{
        margin:10,
        fontSize:25,
        fontWeight:"bold",
        color:Colors.yellow500,
        textAlign:"center"
    }
})