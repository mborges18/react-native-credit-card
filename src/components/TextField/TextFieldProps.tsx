import {InputModeOptions} from 'react-native';
import MaskType from './MaskType';

export type TextFieldProps = {
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
    iconStart: string,
    isPassword: boolean
}