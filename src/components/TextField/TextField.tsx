import React, {useState} from 'react';
import {View, Text, Animated, TextInput, InputModeOptions} from 'react-native';
import styles from './styles';
import MASK from './mask';
import MaskType from './MaskType';
import Icon from 'react-native-vector-icons/Fontisto';

type TextFieldProps = {
    label: string,
    placeHolder: string,
    inputMode: InputModeOptions,
    messageError: string,
    colorBorderEnabled: string,
    colorBorderDisabled: string,
    colorBorderError: string,
    maskType?: MaskType,
    listenerChangeText: ((text: string) => void);
    colorContent: string,
    colorText: string,
    iconStart: string
}

export default function TextField(
  props: TextFieldProps
) {
  const [borderOn, setBorderOn] = useState(false);
  const [digit, setDigit] = useState('');
  const [activated, setActivated] = useState(false);
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
      duration: 200,
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
      case MaskType.CEP:
        text = MASK.maskCep(text);
        handlerLimitAndText(text, 10);
        break;

      case MaskType.PHONE:
        text = MASK.maskPhoneDDI2(text);
        handlerLimitAndText(text, 19);
        break;

      case MaskType.CPF:
        text = MASK.maskCpf(text);
        handlerLimitAndText(text, 15);
        break;

      case MaskType.DATE:
        text = MASK.maskDate(text);
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
        paddingTop:10,
        position: 'relative',
        width: '100%',
        backgroundColor: 'white'
        }}>
      <View>

      <TextInput
        style={[styles.input, {borderColor: helperBorderColor(props)}]}
        onBlur={() => handlerBlurInput()}
        onFocus={() => handlerFocusInput()}
        onChangeText={(text: string) => handlerMaskType(text)}
        value={digit}
        placeholder={activated ? props.placeHolder : ''}
        inputMode={props.inputMode}/>

        <Icon style={{position:'absolute', marginTop: 16, marginStart: 10}} name={props.iconStart} size={18} color={handlerColorLabel()} />
       
       <Animated.Text
          style={[
            animatedStyles.animeLabel,
            styles.label,
            {
              zIndex: activated ? 2 : -1,
              color: handlerColorLabel(),
              backgroundColor: props.colorContent != null ? props.colorContent : '#fff'
            },
          ]}>
          {props.label}
        </Animated.Text>


        {props.messageError != '' && props.messageError != null ? (
          <Text style={{color: props.colorBorderError}}>{props.messageError}</Text>
        ) : null}
      </View>
    </View>
  );
}

