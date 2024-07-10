import {InputModeOptions} from 'react-native';
import MaskType from 'components/textfield/MaskType';

export type TextFieldProps = {
    label: string,
    placeHolder: string,
    value?: string,
    inputMode?: InputModeOptions,
    maxLength?: number,
    messageError?: string,
    colorBorderEnabled?: string,
    colorBorderDisabled?: string,
    colorBorderError?: string,
    maskType?: MaskType,
    colorContent?: string,
    colorText?: string,
    iconStart: string,
    isPassword?: boolean,
    isVisible?: boolean,
    listenerChangeText: ((text: string) => void);
}