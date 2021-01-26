import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from './src/components/AppBar'
import HomeScreen from './src/screens/HomeScreen'
import SingleRecipe from './src/screens/SingleRecipe'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          header: AppBar,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SingleRecipe" component={SingleRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
