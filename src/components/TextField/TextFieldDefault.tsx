import React from 'react';
import { InputModeOptions } from 'react-native';
import TextField from '../../components/TextField/TextField';
import Theme from '../../utils/AppTheme';
import MaskType from './MaskType';

type TextFieldDefultProps = {
    label: string,
    placeHolder: string,
    inputMode: InputModeOptions,
    maskType?: MaskType,
    iconStart: string
    messageError: string,
    listenerChangeText: ((text: string) => void),
    isPassword: boolean
}

export default function TextFieldDefault(
    props: TextFieldDefultProps
) {
    const ThemeApp = Theme()
    return(
        <TextField 
        label={props.label}
        placeHolder={props.placeHolder}
        inputMode={props.inputMode}
        messageError={props.messageError}
        listenerChangeText={(text) => {
            props.listenerChangeText(text)
        } }
        colorBorderEnabled={ThemeApp.colors.primary}
        colorBorderDisabled={ThemeApp.colors.border}
        colorBorderError={ThemeApp.colors.error}
        colorContent={ThemeApp.colors.background}
        colorText={ThemeApp.colors.onBackground}
        iconStart={props.iconStart} 
        isPassword={props.isPassword}
         />
    )
}