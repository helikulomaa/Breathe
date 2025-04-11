import { Text, View, Button } from 'react-native';
import { styles } from "../styles";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Breathe</Text>
            <Button title="1 min" onPress={() => navigation.navigate('BreatheScreen', { duration: 1 })} />
            <Button title="3 min" onPress={() => navigation.navigate('BreatheScreen', { duration: 3 })} />
            <Button title="5 min" onPress={() => navigation.navigate('BreatheScreen', { duration: 5 })} />
            <Button title="10 min" onPress={() => navigation.navigate('BreatheScreen', { duration: 10 })} />
        </View>
    );
}