import { View, Text, Pressable } from "react-native";
import { styles } from "../styles";

export default function YourExercisesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Exercises</Text>
            <Text>Coming soon...</Text>
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.button}>
                <Text style={styles.buttonText2}>Back</Text>
            </Pressable>
        </View>
    )
}
