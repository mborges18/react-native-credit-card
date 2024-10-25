import { useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { RangeProps } from "..";
 
const paddingHorizontal = 32;
const widthWindow = Math.floor(Dimensions.get("window").width - paddingHorizontal);
 
interface onStateChangeProps {
  translationX: number;
  state: number;
}
 
const usePanGesture = ({ min, max, value, inputValue, onValueChange }: RangeProps) => {
  const hasGesture = useRef(false);
  const tx = useSharedValue(0);
  const txCurrent = useSharedValue(0);
  const widthValue = useSharedValue(0);
  const paddingDefault = 8;
  const padding = paddingDefault * 4;
 
  const animatedThumb = useAnimatedStyle(() => ({
    transform: [{ translateX: tx.value + 10 }],
  }));
 
  useEffect(() => {
    if (!hasGesture.current) {
      setTimeout(() => {
        const newValue = Math.floor((value * widthWindow) / max);
        if (newValue >= widthWindow) {
          tx.value = widthWindow - padding;
          widthValue.value = newValue;
        } else {
          tx.value = newValue;
          widthValue.value = newValue + paddingDefault;
        }
      }, 500);
    }
  }, [inputValue]);
 
  const onHandleValueChange = (value: number) => {
    if (Math.floor(tx.value) >= 0 || Math.floor(tx.value) <= Math.floor(widthWindow)) {
      tx.value = value + txCurrent.value;
      const valueMonetary = getValueMonetary();
      onValueChange(valueMonetary);
    }
  };
 
  const onHandleStateChange = ({ translationX, state }: onStateChangeProps) => {
    if (state === 5) {
      txCurrent.value += translationX;
      const valueMonetary = getValueMonetary();
 
      if (Math.floor(tx.value) <= 0 || valueMonetary <= min) {
        const newValue = Math.floor((value * widthWindow) / max);
        txCurrent.value = newValue;
        tx.value = newValue;
        onValueChange(min);
      } else if (Math.floor(tx.value) + paddingHorizontal >= Math.floor(widthWindow)) {
        txCurrent.value = Math.floor(widthWindow - paddingHorizontal / 2);
        tx.value = Math.floor(widthWindow - paddingHorizontal / 2);
        onValueChange(max);
      }
    }
  };
 
  const getValueMonetary = () => {
    const percent = (tx.value / Math.floor(widthWindow)) * 100;
    const rawValue = (Math.floor(percent) / 100) * max;
 
    const roundedValue = Math.round(rawValue / 50) * 50;
 
    return roundedValue;
  };
 
  return {
    animatedThumb,
    onHandleStateChange,
    onHandleValueChange,
  };
};
 
export default usePanGesture;