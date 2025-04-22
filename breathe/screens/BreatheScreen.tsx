import React, { useEffect, useState } from 'react';
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
  const [affirmation, setAffirmation] = useState('');

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

  // Haetaan satunnainen affirmaatio harjoituksen lopussa
  const fetchAffirmation = async () => {
    try {
      const response = await fetch('https://www.affirmations.dev');
      const data = await response.json();
      setAffirmation(data.affirmation);
    } catch (error) {
      console.error('Error fetching affirmation:', error);
      setAffirmation('Well done!');
    }
  };

  useEffect(() => {
    if (showDone) {
      fetchAffirmation(); // Haetaan affirmaatio, kun harjoitus on valmis
    }
  }, [showDone]);

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
          <BreathingAnimation duration={duration * 12} onComplete={() => setShowDone(true)} isSpeechActive={isSpeechActive} />
        </>
      )}

      {showDone && (
        <Text style={styles.affirmation}>{affirmation}</Text>
      )}
      <View style={{ marginBottom: 70 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <Text style={styles.buttonText2}>Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BreatheScreen;
