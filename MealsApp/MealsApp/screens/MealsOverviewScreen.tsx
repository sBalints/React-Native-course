import React, { useCallback } from "react"
import { StyleSheet, View, Text, FlatList} from "react-native"
import { MEALS,CATEGORIES } from "../data/dummy-data"
import { useRoute } from "@react-navigation/native"
import MealItem from "../components/MealItem"
import { useEffect } from "react"
const MealsOverviewScreen = ({ navigation, route}) => {

    const hookRoute = useRoute(); // hookRoute.params.categoryId

    const catId = route.params.categoryId;
    useEffect(()=> {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        })
    },[navigation, catId]);

    

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    })

    const mealKeyExtractor = useCallback((item) => { return item.id},[])
 
    const renderMealItem = useCallback((itemData)=>{
        const item = itemData.item;
        


        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return <MealItem {...mealItemProps}/>
    },[])

    return (
        <View style={styles.container}>
            <FlatList
                data = {displayedMeals}
                keyExtractor={mealKeyExtractor}
                renderItem={renderMealItem}
                />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({

    container: {
        flex:1,
        padding: 16,
    }

})