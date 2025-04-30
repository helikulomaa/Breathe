import React from 'react';
import { Alert, Pressable, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

const Reminder: React.FC = () => {
    const handleSetReminder = async () => {
        // Tarkista lupa ilmoituksiin
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        // Jos ei ole lupaa:
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        // Ilmoitus jos ei vieläkään lupaa:
        if (finalStatus !== 'granted') {
            Alert.alert('Notifications blocked', 'Please enable notifications in your device settings.');
            return;
        }

        // Perutaan aiemmat ilmoitukset varmuuden vuoksi, jottei tule tuplana
        await Notifications.cancelAllScheduledNotificationsAsync();

        // Asetetaan ilmoitus 10 sekunnin päähän (testauksen helpottamiseksi)
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Breathe 💙',
                body: "It's time to breathe!",
                sound: true,
            },
            trigger: {
                type: 'timeInterval',
                seconds: 5,
                repeats: false,
            } as Notifications.TimeIntervalTriggerInput, // Tämä pakottaa oikean tyypin
        });

        Alert.alert('Reminder set', "You'll receive a reminder in 10 seconds.");
    };

    return <Pressable onPress={handleSetReminder}><Text>Remind me!</Text></Pressable>;
};

export default Reminder;
