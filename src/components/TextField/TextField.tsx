import React, {useState} from 'react';
import { View, Text, Animated, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Mask from './mask';
import MaskType from './MaskType';
import { TextFieldProps } from './TextFieldProps';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TextField(
  props: TextFieldProps
) {
  const [borderOn, setBorderOn] = useState(false);
  const [digit, setDigit] = useState('');
  const [activated, setActivated] = useState(false);
  const [eyeToggle, setEyeToggle] = useState(true);
  const [upperAnimation, setUpperAnimation] = useState(new Animated.Value(0));

  const handlerFocusInput = () => {
    setBorderOn(true);
    startAnimation();
  };

  const handlerBlurInput = () => {
    setBorderOn(false);
    startAnimation();
  };

  const startAnimation = () => {
    setActivated(!activated);

    Animated.timing(upperAnimation, {
      toValue: activated && digit == '' ? 0 : -28,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyles = {
    animeLabel: {
      transform: [
        {
          translateY: upperAnimation,
        },
        {
          translateX: upperAnimation,
        },
      ],
    },
  };

  const handlerMaskType = (text: string) => {
    switch (props.maskType) {

      case MaskType.PHONE:
        text = Mask.phoneDDI2(text);
        handlerLimitAndText(text, 19);
        break;

      case MaskType.DATE:
        text = Mask.date(text);
        handlerLimitAndText(text, 11);
        break;

      case '' || null:
        props.listenerChangeText(text);
        setDigit(text);
        break;

      default:
        props.listenerChangeText(text);
        setDigit(text);
    }
  };

  const handlerLimitAndText = (text: string, limit: number) => {
    props.listenerChangeText(text);
    text.length < limit ? setDigit(text) : '';
  };

  function handlerColorLabel() {
    if (props.messageError != '' && props.messageError != null) {
      return props.colorBorderError;
    } else {
      if (borderOn) return props.colorBorderEnabled;
      else return props.colorBorderDisabled;
    }
  }

  function helperBorderColor(props: TextFieldProps) {
    if (props.messageError != '' && props.messageError != null) {
      return props.colorBorderError;
    } else {
      if (borderOn) return props.colorBorderEnabled;
      else return props.colorBorderDisabled;
    }
  }

  return (
    <View style={{
        marginTop: 20,
        position: 'relative',
        width: '100%',
        backgroundColor: props.colorContent != null ? props.colorContent : '#fff'
        }}>
  
      <TextInput
          style={[styles.input, {borderColor: helperBorderColor(props)}]}
          onBlur={() => handlerBlurInput()}
          onFocus={() => handlerFocusInput()}
          onChangeText={(text: string) => handlerMaskType(text)}
          value={digit}
          placeholder={activated ? props.placeHolder : ''}
          inputMode={props.inputMode}
          secureTextEntry={props.isPassword && eyeToggle}
        />

        <Icon style={styles.icon} name={props.iconStart} size={22} color={handlerColorLabel()} />

        {props.isPassword &&
        <TouchableOpacity activeOpacity={.7} style={[styles.icon, { right: 0, zIndex: 100, marginEnd: 10}]} onPress={() => {
          setEyeToggle(!eyeToggle)
        }}> 
          <Icon  
          name={!eyeToggle?  'visibility' : 'visibility-off'} size={22} color={handlerColorLabel()}
          />
          </TouchableOpacity>
        }

       
       <Animated.Text
          style={[
            animatedStyles.animeLabel,
            styles.label,
            {
              zIndex: activated || digit != '' ? 2 : -1,
              color: handlerColorLabel(),
              backgroundColor: props.colorContent != null ? props.colorContent : '#fff'
            },
          ]}>
          {props.label}
        </Animated.Text>

        {props.messageError != '' && props.messageError != null && 
        <Text style={{color: props.colorBorderError}}>{props.messageError}</Text>}
    
    </View>
  );
}

