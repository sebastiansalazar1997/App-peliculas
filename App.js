import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='App_to_Home'
      screenOptions={
        {
        headerTintcolor:'black',
        headerStyle: {backgroundColor: 'orange'}
        }
      }>
        <Stack.Screen
        name='App_to_Home'
        component={HomeScreen}
        options={{
          title: 'Tiempo de peliculas ♥',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
        />
        <Stack.Screen
        name="Home_to_Details"
        component={DetailsScreen}
        options={({route})=>({title:route.params.movies.title})}
        />
        <Stack.Screen
        name="Details_to_Details"
        component={DetailsScreen}
        options={({route})=>({title:route.params.movies.title})}
        />
        <Stack.Screen
        name="BigImageView"
        component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
