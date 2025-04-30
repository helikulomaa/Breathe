import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import BreatheScreen from './screens/BreatheScreen';
import SetReminderScreen from './screens/SetReminderScreen';
import YourExercisesScreen from './screens/YourExercisesScreen';
import { useFonts } from 'expo-font';
import { Text, Pressable, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

const Drawer = createDrawerNavigator();


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
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Set Reminder" component={SetReminderScreen} />
        <Drawer.Screen name="Your Exercises" component={YourExercisesScreen} />
        <Drawer.Screen name="BreatheScreen" component={BreatheScreen} options={{ drawerItemStyle: { display: 'none' } }} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

