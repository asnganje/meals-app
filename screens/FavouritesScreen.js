import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavouritesScreen() {
  const FavoritesCtX = useContext(FavoritesContext)
  const favMealIds = FavoritesCtX.ids
  const favMeals = MEALS.filter((meal)=> favMealIds.includes(meal.id) )
  
  function NoticeDisplay() {
    return(
      <View style={styles.rootContainer}>
        <Text style={styles.textContainer}>You have no favorite meals yet!</Text>
      </View>
    )
  }
  
  let screen = <MealsList items={favMeals}/>

  if (favMealIds.length === 0) {
    screen = <NoticeDisplay />
  }
  return(<>{screen}</>)
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  textContainer:{
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  }
})