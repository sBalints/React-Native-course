import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriresScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

import {useFonts} from 'expo-font'
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'soda-shake': require('./assets/fonts/soda-shake.ttf')
  // })

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25'
            }
          }}
          >
          
          <Stack.Screen name='MealsCategories' component={CategoriresScreen} 
            options={{
              title: 'All categories',
            }}/>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
          <Stack.Screen name='MealDetailsScreen' component={MealDetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
     
  );
}

const styles = StyleSheet.create({
  container: {},
});
