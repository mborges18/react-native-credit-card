import React from 'react'
import {View, Text } from 'react-native'
import TextFieldDefault from '../../../components/TextField/TextFieldDefault'
import Theme from '../../../utils/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons'
import ButtonDefault from '../../../components/button/ButtonDefault'
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler'
import SwitchButton from './SwitchButton'
import SignInViewModel from './SignInViewModel'
import ButtonOutline from '../../../components/button/ButtonOutline';

const SignInScreen = () => {
    const viewModel = SignInViewModel()
    const ThemeApp = Theme()
    return (
        <GestureHandlerRootView>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <View style={{padding: 16}}>
        <Text style={{marginTop: 16, textAlign:'center', fontWeight:'bold', fontSize: 26, textTransform:'uppercase', color: ThemeApp.colors.text }}>
            <Icon name="lock" size={24} color={ThemeApp.colors.text} /> Acessos</Text>

        <Text style={{marginTop: 16, fontWeight:'bold', fontSize: 20, color: ThemeApp.colors.text }}>
            Seja bem vindo!
        </Text>

        <Text style={{marginTop: 8, fontWeight:'bold', fontSize: 16, color: ThemeApp.colors.text }}>
            Com a sua carteira de cartões de crádito você pode fazer suas transações de qualque lugar.
        </Text>

        <TextFieldDefault 
            label={'E-mail'} 
            placeHolder={'Ex: nome@dominio.com'} 
            inputMode={'email'} 
            iconStart={'alternate-email'} 
            messageError={viewModel.errorEmail} 
            isPassword={false} 
            listenerChangeText={(text) => {
                viewModel.onEmail(text)
            } }
        />

        <TextFieldDefault 
            label={'Senha'} 
            placeHolder={'Ex: A@123'} 
            inputMode={'text'} 
            iconStart={'key'} 
            messageError={viewModel.errorPassword} 
            isPassword={true} 
            listenerChangeText={(text) => {
                viewModel.onPassword(text)
            } }
        />

        <SwitchButton
            label={'Continuar conectado'}
            isOn={viewModel.isKeepConnected} 
            onToggle={() => {
                viewModel.onKeepConnected()
            }}        
        />

        <ButtonDefault text={'ACESSAR'} isLoading={viewModel.isLoading} clickListener={() => {
            viewModel.onSubmit()
        } } isDisabled={viewModel.isDisabledButton || viewModel.isLoading} />

        <ButtonOutline text={'ESQUECI A SENHA'} isLoading={false} clickListener={() => {
                    } } isDisabled={false} />

        </View>
        </ScrollView>
        </GestureHandlerRootView>
    );
}

export default SignInScreen