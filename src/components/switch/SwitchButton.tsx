import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from "./styles";
import { useSwitchButton } from './useSwitchButton';

type ToggleProps = {
    label: string,
    isOn: boolean,
    onToggle: (() => void),
  };

export default function SwitchButton(props: ToggleProps) {
    const { animateToggle, isChecked, setIsChecked } = useSwitchButton({isOn: props.isOn});
    
    return (
        <S.WrapperSwitch>
        <TouchableOpacity
         activeOpacity={.7}
         onPress={() => {
            setIsChecked(!isChecked)
            console.log(isChecked);
            props.onToggle()
        }}>
            <S.TrackerSwitch isChecked={isChecked}>
                <S.ThumbSwitchAnimate isChecked={isChecked} marginLeft={animateToggle}/>
            </S.TrackerSwitch>
        </TouchableOpacity>
        <S.TextSwitch isChecked={isChecked}>{props.label}</S.TextSwitch>
        </S.WrapperSwitch>
    );
};
