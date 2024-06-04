import React from 'react'
import {View, Text } from 'react-native'
import TextFieldDefault from '../../../components/TextField/TextFieldDefault'
import Theme from '../../../utils/AppTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonDefault from '../../../components/button/ButtonDefault'
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler'
import SignUpViewModel from './SignUpViewModel'

const SignUpScreen = () => {
    const viewModel = SignUpViewModel()
    const ThemeApp = Theme()
    return (
        <GestureHandlerRootView>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <View style={{padding: 16}}>
        <Text style={{marginTop: 16, textAlign:'center', fontWeight:'bold', fontSize: 26, textTransform:'uppercase', color: ThemeApp.colors.text }}>
            <Icon name="clipboard-account" size={24} color={ThemeApp.colors.text} /> Cadastro</Text>

        <Text style={{marginTop: 16, fontWeight:'bold', fontSize: 20, color: ThemeApp.colors.text }}>
            Seja bem vindo!
        </Text>

        <Text style={{marginTop: 8, fontWeight:'bold', fontSize: 16, color: ThemeApp.colors.text }}>
            Com a sua carteira de cartões de crádito você pode fazer suas transações de qualque lugar.
        </Text>

        <Text style={{marginTop: 16, fontWeight:'bold', fontSize: 20, color: ThemeApp.colors.text }}>
            Dados de pessoais
        </Text>

        <TextFieldDefault 
            label={'Nome e sobrenome'} 
            placeHolder={'Ex: José Roberto'} 
            inputMode={'text'} 
            iconStart={'person'} 
            messageError={viewModel.state.errorName} 
            isPassword={false} 
            listenerChangeText={(text) => {
                viewModel.onName(text)
            } }
        />

        <TextFieldDefault 
            label={'Data de nascimento'} 
            placeHolder={'Ex: 00/00/0000'} 
            inputMode={'numeric'} 
            iconStart={'calendar-month'} 
            messageError={viewModel.state.errorBirthDate} 
            isPassword={false} 
            listenerChangeText={(text) => {
                viewModel.onBirthDate(text)
            } }
        />

       <TextFieldDefault 
            label={'Celular'} 
            placeHolder={'Ex: (00) 00000-0000'} 
            inputMode={'numeric'} 
            iconStart={'phone-iphone'} 
            messageError={viewModel.state.errorPhone} 
            isPassword={false} 
            listenerChangeText={(text) => {
                viewModel.onPhone(text)
            } }
        />

        <TextFieldDefault 
            label={'E-mail'} 
            placeHolder={'Ex: nome@dominio.com'} 
            inputMode={'email'} 
            iconStart={'alternate-email'} 
            messageError={viewModel.state.errorEmail} 
            isPassword={false} 
            listenerChangeText={(text) => {
                viewModel.onEmail(text)
            } }
        />

        <Text style={{marginTop: 16, fontWeight:'bold', fontSize: 20, color: ThemeApp.colors.text }}>
            Dados de acesso
        </Text>

        <TextFieldDefault 
            label={'Senha'} 
            placeHolder={'Ex: A@123'} 
            inputMode={'text'} 
            iconStart={'key'} 
            messageError={viewModel.state.errorPassword} 
            isPassword={true} 
            listenerChangeText={(text) => {
                viewModel.onPassword(text)
            } }
        />

        <TextFieldDefault 
            label={'Confirme a senha'} 
            placeHolder={'Ex: A@123'} 
            inputMode={'text'} 
            iconStart={'key'} 
            messageError={viewModel.state.errorConfirmPassword} 
            isPassword={true} 
            listenerChangeText={(text) => {
                viewModel.onConfirmPassword(text)
            } }
        />


        <ButtonDefault text={'CADASTRAR'} isLoading={viewModel.state.isLoading} clickListener={() => {
            viewModel.onSubmit()
        } } isDisabled={viewModel.state.isDisabledButton || viewModel.state.isLoading} />

        </View>
        </ScrollView>
        </GestureHandlerRootView>
    );
}

export default SignUpScreen