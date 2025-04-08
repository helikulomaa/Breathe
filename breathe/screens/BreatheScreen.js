import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from "../styles";

const PHASES = ['Inhale', 'Hold', 'Exhale'];
const PHASE_DURATION = 4;

const BreatheScreen = ({ navigation }) => {
  const route = useRoute();
  const { duration } = route.params;
  const totalDuration = duration * 60;
  const [ongoing, setOngoing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [showDone, setShowDone] = useState(false);

  useEffect(() => {
    let interval;

    if (ongoing) {
      interval = setInterval(() => {
        setElapsedTime(prev => {
          const next = prev + PHASE_DURATION;

          if (next >= totalDuration) {
            clearInterval(interval);
            setShowDone(true);
            setOngoing(false);
            return next;
          } else {
            setPhaseIndex((prevIndex) => (prevIndex + 1) % PHASES.length);
            return next;
          }
        });
      }, PHASE_DURATION * 1000);
    }

    return () => clearInterval(interval);
  }, [ongoing, totalDuration]);

  const handleStart = () => {
    setOngoing(true);
    setElapsedTime(0);
    setPhaseIndex(0);
    setShowDone(false);
  };


  return (
    <View style={styles.container}>
      <Text>Breathe for {duration} min</Text>

      {!ongoing && !showDone && (
        <Pressable onPress={handleStart} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      )}

      {ongoing && (
        <Text style={{ fontSize: 32 }}>{PHASES[phaseIndex]}</Text>
      )}

      {showDone && (
        <Text>Well done!</Text>
      )}
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
    </View>
  );
};

