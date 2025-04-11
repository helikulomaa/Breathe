import React, { useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from '../styles';

interface BreatingAnimationProps {
    phaseIndex: number;
    duration: number;
}

const BreathingAnimation: React.FC<BreatingAnimationProps> = ({ phaseIndex, duration }) => {
    const [animation] = useState(new Animated.Value(0.8)); // Alustetaan koko
    const [text, setText] = useState('Inhale');

    useEffect(() => {
        const breatheAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 2, // Kasvatetaan kokoa kahdella
                    duration: duration * 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(animation, {
                    toValue: 1, // Palautetaan alkuperäiseen kokoon
                    duration: duration * 1000,
                    useNativeDriver: false,
                }),
            ])
        );

        animation.addListener(({ value }) => {
            if (value === 0) setText('Inhale');
            if (value === 1) setText('Hold');
            if (value === 2) setText('Exhale');
        });

        breatheAnimation.start();

        return () => {
            breatheAnimation.stop();
            animation.removeAllListeners();
        };
    }, [animation, duration]);

    const outerCircleRadius = 150;
    const middleCircleRadius = animation.interpolate({
        inputRange: [0.8, 1],
        outputRange: [outerCircleRadius * 0.8, outerCircleRadius],
    });
    const innerCircleRadius = outerCircleRadius * 0.5;

    return (
        <View style={styles.container}>
            <View style={[styles.circle, { width: outerCircleRadius * 2, height: outerCircleRadius * 2, borderRadius: outerCircleRadius }]}>
                <Animated.View
                    style={[
                        styles.middleCircle,
                        {
                            width: middleCircleRadius,
                            height: middleCircleRadius,
                            borderRadius: animation.interpolate({
                                inputRange: [0.8, 1],
                                outputRange: [outerCircleRadius * 0.4, outerCircleRadius * 0.5],
                            }),
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