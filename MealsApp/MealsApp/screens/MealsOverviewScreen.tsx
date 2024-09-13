import React, { useCallback } from "react"
import { StyleSheet, View, Text, FlatList} from "react-native"
import { MEALS,CATEGORIES } from "../data/dummy-data"
import { useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { MealsList } from "../components/MealsList/MealsList"
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

    return (
        <MealsList items={displayedMeals}/>
    );
}

export default MealsOverviewScreen;
