import React, { useState } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { ThemeDefaultApp } from 'utils/AppTheme';

export type AuthenticatorProps = {
  onClick: (page: number) => void
}

export default function TabTopComponent(props: AuthenticatorProps) {
  const [isKeepConnected, setIsKeepConnected] = useState(false);
  const [lampAnimation, setLampAnimation] = useState(new Animated.Value(5));
  const { width } = useWindowDimensions();

  const startAnimation = (page: number) => {
    props.onClick(page)
    setIsKeepConnected(!isKeepConnected);
    Animated.timing(lampAnimation, {
      toValue: isKeepConnected ? 5 : (width / 2) - 21,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyles = {
    lamp: {
      transform: [{ translateX: lampAnimation },],
    },
  };

  return (
    <View style={[styles.tab, { backgroundColor: ThemeDefaultApp.colors.primary }]}>

      <Animated.View style={[styles.lamp, animatedStyles.lamp, { backgroundColor: ThemeDefaultApp.colors.background, }]} />

      <View style={{ flexDirection: 'row', height: 70, }}>
        <TouchableOpacity style={{ flex: 1, justifyContent: "center", }} onPress={() => { startAnimation(0) }}>
          <Text style={{ textAlign: 'center', color: isKeepConnected ? ThemeDefaultApp.colors.background : ThemeDefaultApp.colors.onBackground }}>ACESSAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, justifyContent: "center", }} onPress={() => { startAnimation(1) }}>
          <Text style={{ textAlign: 'center', color: isKeepConnected ? ThemeDefaultApp.colors.onBackground : ThemeDefaultApp.colors.background }}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: 70,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 16,
    marginEnd: 16,
    marginStart: 16,
    position: 'relative'
  },

  lamp: {
    height: 60,
    width: '50%',
    position: 'absolute',
    top: 5,
    borderRadius: 8,
  },
});
