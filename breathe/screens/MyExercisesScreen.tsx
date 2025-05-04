import { View, Text, Pressable } from "react-native";
import { styles } from "../styles";
import Exercises from "../components/Exercises";

export default function MyExercisesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.exTitle}>My Exercises</Text>
            <Exercises />
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.button2}>
                <Text style={styles.buttonText2}>Back</Text>
            </Pressable>
        </View>
    )
}
