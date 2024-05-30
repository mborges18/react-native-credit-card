import React from 'react';
import {View, Text, } from 'react-native';
import TextField from '../../../components/TextField/TextField';
import Theme from '../../../utils/AppTheme';
import MaskType from '../../../components/TextField/MaskType';
import Icon from 'react-native-vector-icons/Fontisto';

const SignInScreen = () => {
    const ThemeApp = Theme()
    return (
        <View style={{padding: 16}}>
        <Text style={{marginTop: 32, textAlign:'center', fontWeight:'bold', fontSize: 26, textTransform:'uppercase', color: ThemeApp.colors.text }}>
            <Icon name="locked" size={24} color="#000" /> Acessos</Text>

        <Text style={{marginTop: 16, fontWeight:'bold', fontSize: 20, color: ThemeApp.colors.text }}>
            Seja bem vindo!
        </Text>

        <Text style={{marginTop: 8, fontWeight:'bold', fontSize: 16, color: ThemeApp.colors.text }}>
            Com a sua carteira de cartões de crádito você pode fazer suas transações de qualque lugar.
        </Text>

        <TextField 
            label={'E-mail'}
            placeHolder={'Ex: nome@dominio.com'}
            inputMode={'email'}
            messageError={''}
            listenerChangeText={(text) => {
            } }
            colorBorderEnabled={ThemeApp.colors.primary}
            colorBorderDisabled={ThemeApp.colors.border}
            colorBorderError={ThemeApp.colors.error}
            colorContent={ThemeApp.colors.background}
            colorText={ThemeApp.colors.onBackground} 
            iconStart={'at'}
                />

        <TextField 
                label={'Senha'}
                placeHolder={'******'}
                inputMode={'none'}
                messageError={''}
                listenerChangeText={(text) => {
                } }
                colorBorderEnabled={ThemeApp.colors.primary}
                colorBorderDisabled={ThemeApp.colors.border}
                colorBorderError={ThemeApp.colors.error}
                colorContent={ThemeApp.colors.background}
                colorText={ThemeApp.colors.onBackground}
                iconStart={'at'} 
                 />
        </View>
    );
}

export default SignInScreen;