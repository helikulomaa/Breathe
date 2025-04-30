import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from "../styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const HomeScreen: React.FC = () => {

    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return (
        <View style={styles.container}>

            <Pressable style={styles.menuButton} onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={24} color="#333" />
            </Pressable>

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

export default HomeScreen;