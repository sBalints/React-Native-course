import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { useCallback } from 'react';

import CategoryGridTile from '../components/CategoryGridTile';

const CategoriresScreen = ({navigation}) => {

    const keyExtractorCategory = useCallback((item) => item.id,[])

    const onPressCategoryHandler = useCallback((itemData)=>{
        navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id
        });
    },[navigation]);

    const renderCategory = useCallback((itemData) => {

        return <CategoryGridTile onPress={() => onPressCategoryHandler(itemData)} color={itemData.item.color} title={itemData.item.title}/>
    },[onPressCategoryHandler])

    return (
        <View>
            <FlatList
                data = {CATEGORIES}
                keyExtractor={keyExtractorCategory}
                renderItem={renderCategory}
                numColumns={2}
                />
        </View>
    );

}


export default CategoriresScreen


const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }

});