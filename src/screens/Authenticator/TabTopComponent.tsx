import React, {useState} from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet, useWindowDimensions} from 'react-native';
import Theme from 'utils/AppTheme';
import { AuthenticatorProps } from 'screens/authenticator/AuthenticatorProps';

export default function TabTopComponent(props: AuthenticatorProps) {
  const [isKeepConnected, setIsKeepConnected] = useState(false);
  const [lampAnimation, setLampAnimation] = useState(new Animated.Value(5));
  const {width} = useWindowDimensions();

  const startAnimation = (page: number) => {
    props.onClick(page)
    setIsKeepConnected(!isKeepConnected);
    Animated.timing(lampAnimation, {
      toValue: isKeepConnected ? 5 : (width/2) - 21,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  
  const animatedStyles = {
    lamp: {
      transform: [{translateX: lampAnimation},],
    },
  };

    const ThemeApp = Theme()
      return (
        <View style={[styles.tab, { backgroundColor: ThemeApp.colors.primary }]}>
    
          <Animated.View style={[styles.lamp, animatedStyles.lamp, { backgroundColor: ThemeApp.colors.background, }]} />
    
          <View style={{flexDirection: 'row', height: 70, }}>
          <TouchableOpacity style={{flex: 1, justifyContent: "center",}} onPress={()=>{ startAnimation(0) }}>
            <Text style={{ textAlign: 'center', color: isKeepConnected ? ThemeApp.colors.background : ThemeApp.colors.onBackground }}>ACESSAR</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={{flex: 1, justifyContent: "center",}} onPress={()=>{ startAnimation(1) }}>
            <Text style={{textAlign: 'center', color: isKeepConnected ? ThemeApp.colors.onBackground : ThemeApp.colors.background }}>CADASTRAR</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    tab: {
        height: 70, 
        borderRadius: 8, 
        marginTop:32, 
        marginBottom:16, 
        marginEnd: 16, 
        marginStart:16, 
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
