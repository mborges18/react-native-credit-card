import { useEffect, useState } from "react";
import { TextFieldProps } from "./TextFieldProps";
import { Animated } from "react-native";
import Mask from "./mask";

export const useTextField = (props: TextFieldProps) => {

    const [borderOn, setBorderOn] = useState(false);
    const [zindex, setZindex] = useState(-1);
    const [digit, setDigit] = useState(props.value);
    const [activated, setActivated] = useState(false);
    const [eyeToggle, setEyeToggle] = useState(true);
    const [upperAnimation] = useState(new Animated.Value(0));
  
    useEffect(() => {
      if(props.value!=undefined && props.value!=null && props.value!='') {
        setZindex(2);
      }
      setDigit(props.value);
      startAnimation();
    }, [props.value])
  
    const handlerFocusInput = () => {
      setBorderOn(true);
      setZindex(2);
      startAnimation();
    };
  
    const handlerBlurInput = () => {
      setBorderOn(false);
      if(digit!=undefined && digit!=null && digit!='') {
        setZindex(2);
      } else {
        setZindex(-1);
      }
      startAnimation();
    };
  
    const hanlderPositionLabel = () => {
      return activated ? -28 : digit==undefined || digit==null || digit=='' ? 0 : -28
    }

    const handlerPlaceHolder = () => {
        return !activated ? props.placeHolder : ''
    }
  
    const startAnimation = () => {
      setActivated(!activated);
  
      Animated.timing(upperAnimation, {
        toValue: hanlderPositionLabel(),
        duration: 100,
        useNativeDriver: false,
      }).start();
    };
  
    const animatedStyles = {
      animeLabel: {
        transform: [
          { translateY: upperAnimation },
          { translateX: upperAnimation },
        ],
      },
    };
  
    const handlerMaskType = (text: string) => {
      if(props.maskType!=null) {
        text = Mask.maskCustom(props.maskType, text);
        props.listenerChangeText(text);
        setDigit(text)
      } else {
        props.listenerChangeText(text);
        setDigit(text);
      }
    };
  
    const handlerColorLabel = () => {
      if (props.messageError != '' && props.messageError != null) {
        return props.colorBorderError;
      } else {
        if (borderOn) return props.colorBorderEnabled;
        else return props.colorBorderDisabled;
      }
    }
  
    const helperBorderColor = (props: TextFieldProps) => {
      if (props.messageError != '' && props.messageError != null) {
        return props.colorBorderError;
      } else {
        if (borderOn) return props.colorBorderEnabled;
        else return props.colorBorderDisabled;
      }
    }

    const handlerIconEyeToggle = () => {
        return !eyeToggle ? 'visibility' : 'visibility-off';
    }

    const handlerMessageError = () => {
      return props.messageError != '' && props.messageError != null;
    }

    const handlerSecretPassword = () => {
      return props.isPassword && eyeToggle;
    }

    const handlerEyeToggle = () => {
      setEyeToggle(!eyeToggle)
    }
    
    return {
        handlerFocusInput,
        handlerBlurInput,
        hanlderPositionLabel,
        handlerPlaceHolder,
        handlerMaskType,
        handlerColorLabel,
        helperBorderColor,
        handlerEyeToggle,
        handlerIconEyeToggle,
        handlerMessageError,
        handlerSecretPassword,
        animatedStyles,
        zindex,
        digit,
        activated,
    }
}