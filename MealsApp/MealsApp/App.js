import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriresScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

import {useFonts} from 'expo-font'
import MealDetailsScreen from './screens/MealDetailsScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'
import { FavoritesContext,FavoritesContextProvider } from './store/context/favorites-context';
import { Provider } from 'react-redux';

import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator= () => {

  return (

    <Drawer.Navigator
    initialRouteName='Categories'
      screenOptions={{
          headerStyle: {
            backgroundColor: '#351401'
          },
          headerTintColor: 'white',
          sceneContainerStyle: {
            backgroundColor: '#3f2f25'
          },
          drawerContentStyle: {
            backgroundColor: '#351401'
          },
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',


      }}
      >
      <Drawer.Screen name='Categories' component={CategoriresScreen}
        options={{
          title: 'All categories',
          drawerIcon: ({color, size}) => (<Ionicons name='list' color={color} size={size} />),
        }}
        />
      <Drawer.Screen name='Favorites' component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size}) => (<Ionicons name='star' color={color} size={size} />),
        }}
        />
    </Drawer.Navigator>

  )

}


export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'soda-shake': require('./assets/fonts/soda-shake.ttf')
  // })

  return (
    <>
      <StatusBar style='light'/>
      <Provider store={store}>
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
          
          <Stack.Screen name='MealsCategories' component={DrawerNavigator} 
            options={{
              title: 'All categories',
              headerShown: false
            }}/>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
          <Stack.Screen name='MealDetailsScreen' component={MealDetailsScreen}
          options={{
            title: 'About the Meal',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
     
  );
}

const styles = StyleSheet.create({
  container: {},
});
