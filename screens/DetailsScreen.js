import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetail";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function DetailsScreen({route, navigation}) {
  const mId = route.params.mealId;
  const selectedMeal = MEALS.find((meal)=>meal.id === mId);

  function headerButtonPressHandler() {
    console.log("tapped");
    
  }

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerRight: ()=> {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
      }
    })
  }, [navigation, headerButtonPressHandler])
  
  return(
    <ScrollView style={styles.rootContainer}>
      <Image 
        source={{ uri:selectedMeal.imageUrl}}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails 
          duration={selectedMeal.duration} 
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients}/>
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailsScreen;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:40
  },
  image: {
    width: "100%",
    height:350
  },
  title: {
    fontWeight:"bold",
    fontSize:24,
    textAlign:"center",
    margin:8,
    color:"white"
  },
  detailText:{
    color: "white"
  },
  listContainer:{
    width:"80%"
  },
  listOuterContainer:{
    alignItems:"center"
  }
})