import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import BreathingAnimation from '../components/BreathingAnimation';
import { styles } from "../styles";
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/FontAwesome';

type BreatheScreenRouteProp = RouteProp<RootStackParamList, 'BreatheScreen'>;

const BreatheScreen = ({ navigation }) => {
  const route = useRoute<BreatheScreenRouteProp>();
  const { duration } = route.params;
  const [ongoing, setOngoing] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);

  const handleStart = () => {
    setOngoing(true);
    setShowDone(false);
  };

  const toggleSpeech = () => {
    if (isSpeechActive) {
      Speech.stop(); // Sammuttaa ääniohjauksen
    }
    setIsSpeechActive(prev => !prev); // Vaihtaa tilan
  };

  return (
    <View style={styles.container}>



      {!ongoing && !showDone && (
        <>
          {/* Nappula ääniohjauksen hallintaan */}
          <Pressable onPress={toggleSpeech} style={styles.speechButton}>
            {/* Ikoni vaihtuu tilan mukaan */}
            <Icon style={styles.speechIcon}
              name={isSpeechActive ? 'microphone' : 'microphone-slash'}
            />
          </Pressable>
          <Text style={styles.eTitle}>Breathe for {duration} min</Text>
          <Pressable onPress={handleStart} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        </>
      )}

      {ongoing && (
        <>
          <BreathingAnimation duration={duration * 60} onComplete={() => setShowDone(true)} isSpeechActive={isSpeechActive} />
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
