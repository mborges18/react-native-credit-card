import { useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import { CreditCardItemProps } from "../screens/ItemCard";

const useItemCard = (props: CreditCardItemProps) => {

    const [heightAnimation] = useState(new Animated.Value(60));
    const [isOpentState, setIsOpentState] = useState(props.isOpen);
  
    const flipAnim = useRef(new Animated.Value(0)).current;
    const [isFront, setIsFront] = useState(true);
  
    const showContent = () => {
      setIsOpentState(!isOpentState)
  
      Animated.timing(heightAnimation, {
        toValue: isOpentState ? 60 : 210,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false 
      }).start();
    };
  
    const flip = () => {
      Animated.timing(flipAnim, {
          toValue: props.isFront ? 0 : 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false 
      }).start();
  
      setTimeout(() => {
          setIsFront(props.isFront ?? false)
      }, 250)
    };
  
    const rotateCard = flipAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const styleRotate = {
      transform: [
          {rotateY:  rotateCard},
      ],
      height: heightAnimation, 
      marginTop: 3,
    };

    return {
        flip,
        showContent,
        isFront,
        isOpentState,
        styleRotate,
    }
}

export default useItemCard;