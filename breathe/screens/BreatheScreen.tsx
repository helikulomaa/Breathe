import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import BreathingAnimation from '../components/BreathingAnimation';
import { styles } from "../styles";

type BreatheScreenRouteProp = RouteProp<RootStackParamList, 'BreatheScreen'>;

const BreatheScreen = ({ navigation }) => {
  const route = useRoute<BreatheScreenRouteProp>();
  const { duration } = route.params;
  const [ongoing, setOngoing] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const handleStart = () => {
    setOngoing(true);
    setShowDone(false);
  };

  return (
    <View style={styles.container}>

      {!ongoing && !showDone && (
        <>
          <Text style={styles.eTitle}>Breathe for {duration} min</Text>
          <Pressable onPress={handleStart} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        </>
      )}

      {ongoing && (
        <>
          <BreathingAnimation duration={duration * 60} onComplete={() => setShowDone(true)} />
        </>
      )}

      {showDone && (
        <Text>Well done!</Text>
      )}
      <View style={{ marginBottom: 70 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <Text style={styles.buttonText2}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BreatheScreen;
