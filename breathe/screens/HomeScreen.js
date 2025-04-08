import { Text, View, Button } from 'react-native';
import { styles } from "../styles";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Breathe</Text>
            <Button title="1 min" onPress={() => navigation.navigate('BreatheScreen')} />
        </View>
    );
}