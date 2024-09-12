import { View, Text, StyleSheet, FlatList } from "react-native";


const List = ({data}) => {

    const dataKeyExtractor = (item) => {
        return item; // Ensure the item is unique
    };
    
    const renderDataItem = (itemData) => {
        return (
            <View style={styles.listItem}>
                <Text style={styles.itemtext}>{itemData.item}</Text>
            </View>
        );
    };


    return (
        <FlatList
                data={data}
                keyExtractor={dataKeyExtractor}
                renderItem={renderDataItem}
                />
    );

}

export default List;

const styles = StyleSheet.create({

    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemtext:{
        color: '#351401',
        textAlign: 'center',
    }

});
