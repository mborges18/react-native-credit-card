import React, { useContext } from 'react';   
import {View, Text } from 'react-native';
import TextFieldDefault from 'components/textfield/TextFieldDefault';
import Theme from 'utils/AppTheme';
import ButtonDefault from 'components/button/ButtonDefault';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import SignUpViewModel from 'screens/authenticator/signup/SignUpViewModel';
import MaskType from 'components/textfield/MaskType';
import HeaderWellCome from 'components/header/HeaderWellCome';
import DialogError from 'components/dialog/DialogError';
import { ResultRequest } from 'api/ResultRequest';

const SignUpScreen = () => {
    const viewModel = SignUpViewModel()
    const ThemeApp = Theme()

    return (
        <GestureHandlerRootView>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <View style={{padding: 16}}>

            <DialogError 
                title={'Informação'}
                description={'Ocorreu um erro inesperado. Por favor, tente novamente em alguns instantes'}
                onClickOk={() => {
                    viewModel.onCloseErrorService()
                } } 
                isVisible={viewModel.state.errorService}
            />

            <HeaderWellCome 
                title={'Cadastro'} 
                iconName={'clipboard-account'} 
                subTitle={'Seja bem vindo!'} 
                description={'Com a sua carteira de cartões de crádito você pode fazer suas transações de qualque lugar.'}
            />

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
                isVisible={true}
                listenerChangeText={(text) => {
                    viewModel.onName(text)
                } }
            />

            <TextFieldDefault 
                label={'Data de nascimento'} 
                placeHolder={'Ex: 00/00/0000'} 
                inputMode={'numeric'} 
                iconStart={'calendar-month'} 
                maskType={MaskType.DATE}
                messageError={viewModel.state.errorBirthDate} 
                isPassword={false} 
                isVisible={true}
                listenerChangeText={(text) => {
                    viewModel.onBirthDate(text)
                } }
            />

        <TextFieldDefault 
                label={'Celular'} 
                placeHolder={'Ex: (00) 00000-0000'} 
                inputMode={'numeric'} 
                iconStart={'phone-iphone'} 
                maskType={MaskType.PHONE}
                messageError={viewModel.state.errorPhone} 
                isPassword={false} 
                isVisible={true}
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
                isVisible={true}
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
                isVisible={true}
                listenerChangeText={(text) => {
                    viewModel.onPassword(text)
                } }
            />

            <TextFieldDefault 
                label={'Confirme a senha'} 
                placeHolder={'Ex: A@123'} 
                inputMode={'text'} 
                iconStart={'key'} 
                isVisible={true}
                messageError={viewModel.state.errorConfirmPassword} 
                isPassword={true} 
                listenerChangeText={(text) => {
                    viewModel.onConfirmPassword(text)
                } }
            />

            <ButtonDefault text={'CADASTRAR'} isLoading={viewModel.state.isLoading} clickListener={() => {
                viewModel.onSubmit().then((result) => {
                    if(viewModel.state.successService){
                        setSignUp(result as ResultRequest)
                    }
                }).catch((error) => {
                    setSignUp(error)
                })
            } } isDisabled={viewModel.state.isDisabledButton || viewModel.state.isLoading} />

        </View>
        </ScrollView>
        </GestureHandlerRootView>
    );
}

export default SignUpScreen