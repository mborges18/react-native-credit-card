import React, {useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Theme from 'utils/AppTheme'

export default function SwitchButton(props: ToggleProps) {
    const [isChecked, setIsChecked] = useState(props.isOn)
    const animatedValue = new Animated.Value(0);

    const moveToggle = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 20],
    });

    const color = isChecked ? Theme().colors.primary : Theme().colors.onSurfaceVariant;

    animatedValue.setValue(isChecked ? 0 : 1);

    Animated.timing(animatedValue, {
        toValue: isChecked ? 1 : 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: false,
    }).start();

    return (
        <View style={styles.container}>
        <TouchableOpacity
         activeOpacity={.7}
         onPress={() => {
          setIsChecked(!isChecked)
            props.onToggle()
        }}>
            <View style={[styles.toggleContainer, {backgroundColor: color}]}>
            <Animated.View
                style={[
                styles.toggleWheelStyle,
                {
                    marginLeft: moveToggle,
                },
                ]}
            />
            </View>
        </TouchableOpacity>
        {!!props.label && <Text style={[
            styles.label,{
                color: isChecked ? Theme().colors.text : Theme().colors.onSurfaceVariant
            }
            ]}>{props.label}</Text>}
        </View>
    );
};

type ToggleProps = {
  label: string,
  onToggle: (() => void),
  isOn: boolean,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleContainer: {
    width: 46,
    height: 27,
    borderRadius: 100,
    justifyContent: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleWheelStyle: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 12,
  },
})