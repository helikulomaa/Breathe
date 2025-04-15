import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BreatheScreen from './screens/BreatheScreen';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  // Load font
  const [fontsLoaded] = useFonts({
    'AlumniSansPinstripe-Regular': require('./assets/fonts/AlumniSansPinstripe-Regular.ttf'),
    'AlumniSansInlineOne-Regular': require('./assets/fonts/AlumniSansInlineOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BreatheScreen" component={BreatheScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

