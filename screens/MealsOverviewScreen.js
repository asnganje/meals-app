import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) <= 0
  })

  useEffect(()=> {
    const categoryTitle = CATEGORIES.find((category)=>category.id === catId).title
    navigation.setOptions({
      title: categoryTitle
    })
  }, [catId, navigation])

  function renderMealItem(itemData) {
    const {item} = itemData
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    }
    return <MealItem { ...mealItemProps }/>   
  }
  return(
    <View style={styles.container}>
      <FlatList 
        data={displayedMeals}
        renderItem={(itemData)=> renderMealItem(itemData)}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }
})