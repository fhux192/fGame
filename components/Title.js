import { Text,StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.titleContainer}>{children}</Text>;
}

export default Title;

const styles=StyleSheet.create({
    titleContainer:{
        textAlign:"center",
        color:"#edc70c",
        fontSize:25,
        fontWeight:"bold",
        borderWidth:2,
        borderColor:"#edc70c",
        padding:15,
        
    }
})
