import { Animated } from "react-native";
import styled from "styled-components/native";
import { ThemeDefaultApp } from "utils/AppTheme";

type SwitchPros = {
    isChecked: boolean
    marginLeft?: number
}

export const WrapperSwitch = styled.View`
    margin-top: 32px;
    flex-direction: row;
    align-items: center;
`;

export const TrackerSwitch = styled.View<SwitchPros>`
    width: 46px;
    height: 27px;
    border-radius: 100px;
    justify-content: center;
    background-color: ${({isChecked})=> isChecked ? ThemeDefaultApp.colors.primary : ThemeDefaultApp.colors.onSurfaceVariant};
`;

export const ThumbSwitch = styled.View<SwitchPros>`
    width: 25px;
    height: 25px;
    background-color: ${()=> ThemeDefaultApp.colors.onPrimary};
    border-radius: 12px;
    margin-left: ${({marginLeft})=> marginLeft }px;
`;

export const ThumbSwitchAnimate = Animated.createAnimatedComponent(ThumbSwitch);

export const TextSwitch = styled.Text<SwitchPros>`
    margin-left: 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${({isChecked})=> isChecked ? ThemeDefaultApp.colors.text : ThemeDefaultApp.colors.onSurfaceVariant};
`;