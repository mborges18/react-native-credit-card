import { useState } from "react";
import { Animated, Easing } from "react-native";

type UseSwitchButtonPros = {
    isOn: boolean
}

export const useSwitchButton = (props: UseSwitchButtonPros) => {
    const [isChecked, setIsChecked] = useState(props.isOn)
    const animatedValue = new Animated.Value(0);

    const animateToggle = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 20],
    });

    animatedValue.setValue(isChecked ? 0 : 1);

    Animated.timing(animatedValue, {
        toValue: isChecked ? 1 : 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: false,
    }).start();

    return {
        animateToggle,
        isChecked,
        setIsChecked
    }
}