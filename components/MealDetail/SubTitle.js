import { StyleSheet, Text, View } from "react-native";

function SubTitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default SubTitle;

const styles = StyleSheet.create({
  subtitle:{
    fontSize:18,
    fontWeight:"bold",
    color:"#e2b497",
    textAlign:"center"
  },
  subTitleContainer:{
    borderBottomColor:"#e2b497",
    borderBottomWidth:2,
    marginVertical:4,
    marginHorizontal:12,
    padding:6
  }
})