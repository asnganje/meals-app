import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({items}) {
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
        data={items}
        renderItem={(itemData)=> renderMealItem(itemData)}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default MealsList;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }
})