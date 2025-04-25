import { Text, View, Button, Pressable } from 'react-native';
import { styles } from "../styles";
import Reminder from '../components/Reminder';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <Reminder />
            <Text style={styles.title}>Breathe</Text>
            <View style={styles.buttonRow}>
                <Pressable
                    onPress={() => navigation.navigate('BreatheScreen', { duration: 1 })}
                    style={styles.selectButton1}>
                    <Text style={styles.buttonText}>1 min</Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('BreatheScreen', { duration: 3 })}
                    style={styles.selectButton2}>
                    <Text style={styles.buttonText}>3 min</Text>
                </Pressable>
            </View>

            <View style={styles.buttonRow}>
                <Pressable
                    onPress={() => navigation.navigate('BreatheScreen', { duration: 5 })}
                    style={styles.selectButton3}>
                    <Text style={styles.buttonText}>5 min</Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('BreatheScreen', { duration: 10 })}
                    style={styles.selectButton4}>
                    <Text style={styles.buttonText}>10 min</Text>
                </Pressable>
            </View>
        </View>
    );
}