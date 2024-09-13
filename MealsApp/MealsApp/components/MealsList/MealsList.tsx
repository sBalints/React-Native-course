import { useCallback } from "react"
import MealItem from "./MealItem"
import { View,Text,FlatList,StyleSheet } from "react-native"

export const MealsList = ({items}) => {
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
                data = {items}
                keyExtractor={mealKeyExtractor}
                renderItem={renderMealItem}
                />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        padding: 16,
    }

})