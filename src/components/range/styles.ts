import theme from "@themes";
import { horizontalScale, moderateScale, verticalScale } from "@utils/metrics";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
 
const paddingHorizontal = 46;
const widthWindow = Math.floor(Dimensions.get("window").width - paddingHorizontal);
 
export const RangeContainer = styled.View`
  margin-top: ${verticalScale(16)}px;
  justify-content: center;
  align-items: center;
`;
 
export const TrackBack = styled.View`
  width: ${widthWindow}px;
  margin-horizontal: ${horizontalScale(16)}px;
  height: ${verticalScale(16)}px;
  background-color: ${theme.colors.neutral_gainsboro_100};
  border-radius: ${moderateScale(50)}px;
  overflow: hidden;
`;
 
export const TrackFront = styled(Animated.View)`
  height: ${verticalScale(16)}px;
  width: 150%;
  background-color: ${theme.colors.primary_shamrock};
  border-radius: ${moderateScale(50)}px;
  position: absolute;
  right: ${widthWindow - paddingHorizontal}px;
  margin-right: ${verticalScale(32)}px;
`;
 
export const Thumb = styled(Animated.View)`
  right: ${widthWindow - paddingHorizontal / 2}px;
  width: ${horizontalScale(32)}px;
  height: ${verticalScale(32)}px;
  margin-right: ${verticalScale(24)}px;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary_shamrock};
  border-color: ${theme.colors.primary_shamrock};
  border-width: ${moderateScale(1)}px;
  border-radius: ${moderateScale(30)}px;
  z-index: 10;
`;