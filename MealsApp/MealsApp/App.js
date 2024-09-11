import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriresScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

import {useFonts} from 'expo-font'

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'soda-shake': require('./assets/fonts/soda-shake.ttf')
  })

  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen name='MealsCategories' component={CategoriresScreen}/>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
     
  );
}

const styles = StyleSheet.create({
  container: {},
});
