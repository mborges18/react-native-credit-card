import React, { useContext } from 'react';
import { View } from 'react-native';
import TextFieldDefault from '../../../components/TextField/TextFieldDefault';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import SwitchButton from './SwitchButton';
import SignInViewModel from './SignInViewModel';
import ButtonOutline from '../../../components/Button/ButtonOutline';
import HeaderWellCome from '../../../components/Header/HeaderWellCome';
import AuthenticatorContextApi from '../AuthenticatorContextApi';
import DialogError from '../../../components/Dialog/DialogError';
import { ResultRequest } from '../../../api/ResultRequest';

const SignInScreen = () => {
    const {signUp, setSignIn} = useContext(AuthenticatorContextApi)
    const viewModel = SignInViewModel()

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
            title={'Acesso'} 
            iconName={'lock'} 
            subTitle={'Seja bem vindo!'} 
            description={'Com a sua carteira de cartões de crádito você pode fazer suas transações de qualque lugar.'+('\n\n'+(signUp.data))}
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

        <SwitchButton
            label={'Continuar conectado'}
            isOn={viewModel.state.isKeepConnected} 
            onToggle={() => {
                viewModel.onKeepConnected()
            }}        
        />

        <ButtonDefault text={'ACESSAR'} isLoading={viewModel.state.isLoading} clickListener={() => {
            viewModel.onSubmit().then((result) => {
                setSignIn(result as ResultRequest)
            }).catch((error) => {
                setSignIn(error)
            })
        } } isDisabled={viewModel.state.isDisabledButton || viewModel.state.isLoading} />

        <ButtonOutline text={'ESQUECI A SENHA'} isLoading={false} clickListener={() => {
                    } } isDisabled={false} />

        </View>
        </ScrollView>
        </GestureHandlerRootView>
    );
}

export default SignInScreen