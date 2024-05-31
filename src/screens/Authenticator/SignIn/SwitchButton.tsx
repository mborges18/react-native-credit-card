import React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Theme from '../../../utils/AppTheme'

export default function SwitchButton(props: ToggleProps) {
    const animatedValue = new Animated.Value(0);

    const moveToggle = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 20],
    });

    const color = props.isOn ? Theme().colors.primary : Theme().colors.onSurfaceVariant;

    animatedValue.setValue(props.isOn ? 0 : 1);

    Animated.timing(animatedValue, {
        toValue: props.isOn ? 1 : 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: false,
    }).start();

    return (
        <View style={styles.container}>
        <TouchableOpacity
         activeOpacity={.7}
         onPress={() => {
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
                color: props.isOn? Theme().colors.text : Theme().colors.onSurfaceVariant
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