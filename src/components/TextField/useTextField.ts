import { useEffect, useState } from "react";
import { TextFieldProps } from "./TextFieldProps";
import { Animated } from "react-native";
import Mask from "./mask";

export const useTextField = ({
  value, 
  placeHolder, 
  maskType, 
  colorBorderDisabled,
  colorBorderError,
  colorBorderEnabled,
  messageError,
  isPassword,
  listenerChangeText
}: TextFieldProps) => {

    const [borderOn, setBorderOn] = useState(false);
    const [zindex, setZindex] = useState(-1);
    const [digit, setDigit] = useState(value);
    const [activated, setActivated] = useState(false);
    const [eyeToggle, setEyeToggle] = useState(true);
    const [upperAnimation] = useState(new Animated.Value(0));
  
    useEffect(() => {
      if(value!=undefined && value!=null && value!='') {
        setZindex(2);
      }
      setDigit(value);
      startAnimation();
    }, [value])
  
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
        return !activated ? placeHolder : ''
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
      if(maskType!=null) {
        text = Mask.maskCustom(maskType, text);
        listenerChangeText(text);
        setDigit(text)
      } else {
        listenerChangeText(text);
        setDigit(text);
      }
    };
  
    const handlerColorLabel = () => {
      if (messageError != '' && messageError != null && messageError != undefined) {
        return colorBorderError;
      } else {
        if (borderOn) return colorBorderEnabled;
        else return colorBorderDisabled;
      }
    }
  
    const helperBorderColor = () => {
      if (messageError != '' && messageError != null) {
        return colorBorderError;
      } else {
        if (borderOn) return colorBorderEnabled;
        else return colorBorderDisabled;
      }
    }

    const handlerIconEyeToggle = () => {
        return !eyeToggle ? 'visibility' : 'visibility-off';
    }

    const handlerSecretPassword = () => {
      return isPassword && eyeToggle;
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
        handlerSecretPassword,
        animatedStyles,
        zindex,
        digit,
        activated,
    }
}