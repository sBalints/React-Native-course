import { View, Text, StyleSheet, Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const IconButton = ({onPress}) => {

    return (
        <Pressable onPress={onPress}>
            <Ionicons name='star' color='white' size={24}/>
        </Pressable>
    )

}

export default IconButton;


const styles = StyleSheet.create({



});