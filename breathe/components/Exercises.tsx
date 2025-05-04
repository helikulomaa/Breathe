import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebaseConfig';
import { styles } from '../styles';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [totalMinutes, setTotalMinutes] = useState(0);
    const [weeklyMinutes, setWeeklyMinutes] = useState(0);

    useEffect(() => {
        const exercisesRef = ref(db, 'exercises/');
        onValue(exercisesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const items = Object.values(data);
                setExercises(items);

                const now = new Date();
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(now.getDate() - 7);

                let total = 0;
                let weekly = 0;

                // Harjoitusminuuttien laskeminen
                items.forEach((item: any) => {
                    total += item.duration;
                    const date = new Date(item.date);
                    if (date >= oneWeekAgo && date <= now) {
                        weekly += item.duration;
                    }
                });

                setTotalMinutes(total);
                setWeeklyMinutes(weekly);
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.eHeader}>Exercise minutes in total: {totalMinutes} min</Text>
            <Text style={styles.eHeader}>Exercise minutes last week: {weeklyMinutes} min</Text>
            <FlatList
                data={exercises}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }: any) => (
                    <View style={styles.listItem}>
                        <Text style={styles.listText}>{new Date(item.date).toLocaleDateString()} — {item.duration} min</Text>
                        <Text style={styles.affirmationText}>"{item.affirmation}"</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Exercises;
