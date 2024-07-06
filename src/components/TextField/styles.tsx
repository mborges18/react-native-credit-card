import {Animated, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

type InputTextProps = {
  colorContent?: string;
  colorText?: string;
  zIndex?: number;
  positionLabel?: any
}

export const Wrapper = styled.View<InputTextProps>`
  margin-top: 20px;
  position: relative;
  width: '100%';
  background-color: ${({colorContent}) => colorContent ?? '#fff'};
`;

export const InputText = styled.TextInput`
  height: 60px; 
  width: '100%'; 
  border-radius: 6px; 
  padding-left: 36px; 
  padding-right: 36px;
  border-width: 1px;
  z-index: 1;
`;

export const Label = styled.Text<InputTextProps>`
  position: absolute;
  top: 19px;
  left: 35px;
  font-size: 14px;
  padding-left: 5px; 
  padding-right: 5px;
  z-index: ${({zIndex}) => zIndex };
  color: ${({colorText}) => colorText };
  background-color: ${({colorContent}) => colorContent ?? '#fff'};
`;

export const LabelAnimate = Animated.createAnimatedComponent(Label);

export const IconButton = styled.TouchableOpacity`
  position: absolute; 
  top: 19px;
  margin-right: 10px;
  right: 0px; 
  z-index: 100; 
  margin-right: 10px;
`;

export const IconWrapper = styled.View`
  position: absolute; 
  top: 19px;
  left: 10px;
`;