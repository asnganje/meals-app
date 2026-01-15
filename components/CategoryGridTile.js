import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({title, color}) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable 
        android_ripple={{color:"rgba(0, 0, 0, 0.15)"}} 
        style={({pressed})=>[styles.button,
          pressed ? styles.buttonPressed : null
        ]}>
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem:{
    flex:1,
    margin:16,
    height:150,
    elevation:4,
    borderRadius:8,
    backgroundColor:"white",
    overflow:"hidden"
  },
  button:{
    flex:1
  },
  buttonPressed:{
    opacity:0.5,
  },
  innerContainer:{
    flex:1,
    padding:16,
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
    fontSize:18,
    fontWeight:"bold"
  }
})