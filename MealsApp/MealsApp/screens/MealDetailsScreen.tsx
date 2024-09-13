import React, { useCallback, useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FadeIn } from "react-native-reanimated";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite,removeFavorite } from "../store/redux/favorites";
const MealDetailsScreen = () => {

    

    const navigation = useNavigation();
    const route = useRoute();

    const favoriteMealIds= useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch();


    const mealId = route.params.mealId;

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const changeFavoriteStatusHandler = useCallback(() => {
        if(mealIsFavorite){
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}))
        }else{
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }, [mealIsFavorite, mealId, dispatch]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color='white' onPress={changeFavoriteStatusHandler}/>;
            },
        })
    }, [navigation, changeFavoriteStatusHandler])
    

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText} 
                style={undefined}
                />
            <View style={styles.listOuterContainer}>
                <View style={styles.listInnerContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>    
            </View>
        </ScrollView>
    );

}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginBottom: 32,
    },
    text: {
        fontSize:38,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listInnerContainer: {
        width: '80%',
    },
    
});

