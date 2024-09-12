import React, { useCallback, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealDetailsScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const headerButtonPressHandler = useCallback(() => {
        console.log('Pressed!');
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="Tap me" onPress={headerButtonPressHandler}/>;
            },
        })
    }, [navigation, headerButtonPressHandler])
    

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

