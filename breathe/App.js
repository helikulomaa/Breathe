import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BreatheScreen from './screens/BreatheScreen';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    // Kuuntelija saapuville ilmoituksille
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {

      // Näytetään Alert-tyyliin ilmoitus
      Alert.alert(
        notification.request.content.title, // Otsikko
        notification.request.content.body,  // Teksti
        [{ text: "OK" }] // Painike ilmoituksessa
      );
    });

    // Poistetaan kuuntelija, kun komponentti poistetaan
    return () => {
      notificationListener.remove();
    };
  }, []);

  useEffect(() => {

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowAlert: true, // Tämä varmistaa, että ilmoitus näkyy
        shouldSetBadge: false,
      }),
    });
  }, []);

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

