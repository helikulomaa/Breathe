import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from '../styles';

interface AnimationProps {
    duration: number; // Duration in seconds
    onComplete: () => void; // Callback when the exercise completes
}

const PHASES = ['Inhale', 'Hold', 'Exhale'];
const PHASE_DURATION = 4;

const BreathingAnimation: React.FC<AnimationProps> = ({ duration, onComplete }) => {
    const animation = useRef(new Animated.Value(0.6)).current;
    const [text, setText] = useState('Inhale');
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    const totalPhases = Math.ceil(duration / PHASE_DURATION); // vaiheiden määrä niin, että tulee kaikki kolme vaihetta
    const currentPhase = useRef(0)

    useEffect(() => {
        const runPhase = () => {
            const phase = PHASES[phaseIndex];
            setText(phase);

            // Aloita animaatio vaiheen mukaan
            let toValue = 1.2;
            if (phase === 'Exhale') toValue = 0.6;

            Animated.timing(animation, {
                toValue,
                duration: PHASE_DURATION * 1000,
                useNativeDriver: true,
            }).start(() => {
                currentPhase.current += 1;
                setElapsedTime(prev => prev + PHASE_DURATION);

                // Lopetetaan jos tämä oli viimeinen vaihe ja se oli Exhale
                const isLastPhase = currentPhase.current >= totalPhases;
                const isExhale = phase === 'Exhale';

                if (isLastPhase && isExhale) {
                    setText('Good job!');
                    onComplete();
                } else {
                    // Siirrytään seuraavaan vaiheeseen
                    setPhaseIndex(prev => (prev + 1) % PHASES.length);
                }
            });
        };

        runPhase();
    }, [phaseIndex]); // Käynnistää uuden vaiheen, kun phaseIndex päivittyy


    const outerCircleRadius = 150;
    const middleCircleScale = animation.interpolate({
        inputRange: [0.6, 1.2],
        outputRange: [0.6, 1.2],
    });
    const innerCircleRadius = outerCircleRadius * 0.5;

    return (
        <View style={styles.container}>
            <View style={[styles.circle, { width: outerCircleRadius * 2, height: outerCircleRadius * 2, borderRadius: outerCircleRadius }]}>
                <Animated.View
                    style={[
                        styles.middleCircle,
                        {
                            transform: [{ scale: middleCircleScale }],
                        },
                    ]}
                />
                <View style={[styles.innerCircle, { width: innerCircleRadius * 2, height: innerCircleRadius * 2, borderRadius: innerCircleRadius }]}>
                    <Text style={styles.textCircle}>{text}</Text>
                </View>
            </View>
        </View>
    );
};

export default BreathingAnimation;