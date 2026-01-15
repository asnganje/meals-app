import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen
            name='mealsCategories'
            component={CategoriesScreen} 
            options={{
            headerShown: true,
            animation: "slide_from_right"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
