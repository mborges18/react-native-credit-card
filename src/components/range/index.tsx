import { PanGestureHandler } from "react-native-gesture-handler";
import usePanGesture from "./hooks/usePanGesture";
import * as S from "./styles";
 
export interface RangeProps {
  min: number;
  max: number;
  step: number;
  value: number;
  inputValue?: number;
  onValueChange: (value: number) => void;
}
 
const Range: React.FC<RangeProps> = ({ min, max, step, value, inputValue, onValueChange }) => {
  const { animatedThumb, onHandleStateChange, onHandleValueChange } = usePanGesture({
    min,
    max,
    step,
    value,
    inputValue,
    onValueChange,
  });
 
  return (
    <S.RangeContainer>
      <PanGestureHandler
        testID="range"
        hitSlop={step}
        onGestureEvent={event => {
          onHandleValueChange(event.nativeEvent.translationX);
        }}
        onHandlerStateChange={event => {
          onHandleStateChange({
            translationX: event.nativeEvent.translationX,
            state: event.nativeEvent.state,
          });
        }}
      >
        <S.Thumb
          style={animatedThumb}
          testID={"thumb"}
        />
      </PanGestureHandler>
      <S.TrackBack testID="track">
        <S.TrackFront
          style={animatedThumb}
          testID="track-front"
        />
      </S.TrackBack>
    </S.RangeContainer>
  );
};
 
export default Range;
 