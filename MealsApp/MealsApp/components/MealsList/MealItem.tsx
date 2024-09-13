import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import MealDetails from "../MealDetails";

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {

    const navigation = useNavigation();

    const onPressHandler = useCallback(() => navigation.navigate('MealDetailsScreen', {mealId: id}), [navigation, id]);

    return(

        <View style={styles.mealItem}>
            <Pressable 
                onPress={onPressHandler}
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => pressed ? styles.pressedItem : null }
                >
                <View style={styles.innerContainer}>
                    <View>
                        <Image 
                            style={styles.image}
                            source={{uri: imageUrl}}
                            />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                        duration={duration} 
                        complexity={complexity} 
                        affordability={affordability}/>
                </View>
            </Pressable>
        </View>

    );

}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.select({ios: 'visible',android: 'hidden'}),
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow:'hidden',
    },

    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    pressedItem :{
        opacity: 0.5,
    }
});