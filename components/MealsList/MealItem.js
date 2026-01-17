import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../MealDetail";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation()
  function detailsHandler() {    
    navigation.navigate("DetailsScreen", {
      mealId: id
    })
  }
  
  return (
    <View style={styles.mealItem}>
      <Pressable 
        android_ripple={{color:"#ccc"}}
        style={({pressed})=> [
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
        onPress={detailsHandler}
      >
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem:{
    margin:16,
    borderRadius:8,
    overflow:"hidden",
    backgroundColor:"white",
    elevation:4
  },
  image: {
    width: "100%",
    height:200
  },
  title: {
    fontWeight:"bold",
    fontSize:18,
    textAlign:"center",
    margin:8
  },
  buttonPressed: {
    opacity: 0.5
  },
  button:{
    flex:1
  }
})