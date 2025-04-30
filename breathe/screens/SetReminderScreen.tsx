import { View, Text, Pressable } from "react-native";
import { styles } from "../styles";
import Reminder from "../components/Reminder";

export default function SetReminderScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.eTitle}>Set a Reminder</Text>
            <Reminder />
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.button}>
                <Text style={styles.buttonText2}>Back</Text>
            </Pressable>
        </View>
    )
}
