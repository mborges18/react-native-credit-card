import React, { useContext } from 'react';
import { View } from 'react-native';
import TextFieldDefault from 'components/textfield/TextFieldDefault';
import ButtonDefault from 'components/button/ButtonDefault';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import SwitchButton from 'screens/authenticator/signin/SwitchButton';
import SignInViewModel from 'screens/authenticator/signin/SignInViewModel';
import ButtonOutline from 'components/button/ButtonOutline';
import HeaderWellCome from 'components/header/HeaderWellCome';
import AuthenticatorContextApi from '../AuthenticatorContextApi';
import DialogError from 'components/dialog/DialogError';
import { ResultRequest } from 'api/ResultRequest';
import { NavigationUrl } from 'navigation/NavigationUrl';
import SignUpModel from 'screens/authenticator/signup/model/SignUpModel';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const {signUp, setSignIn} = useContext(AuthenticatorContextApi)
    const viewModel = SignInViewModel()
    const navigation: NavigationProp<ParamListBase> = useNavigation();

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
            description={'Com a sua carteira de cartões de crádito você pode fazer suas transações de qualque lugar.\n\n'+(signUp.data as SignUpModel)?.email}
        />

        <TextFieldDefault 
            label={'E-mail'}
            placeHolder={'Ex: nome@dominio.com'}
            value={(signUp.data as SignUpModel)?.email}
            inputMode={'email'}
            iconStart={'alternate-email'}
            messageError={viewModel.state.errorEmail}
            isPassword={false}
            isVisible={true}
            listenerChangeText={(text) => {
                viewModel.onEmail(text);
            } } 
        />

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

        <SwitchButton
            label={'Continuar conectado'}
            isOn={viewModel.state.isKeepConnected} 
            onToggle={() => {
                viewModel.onKeepConnected()
            }}        
        />

        <ButtonDefault text={'ACESSAR'} isLoading={viewModel.state.isLoading} clickListener={() => {
            viewModel.onSubmit().then((result) => {
                if(viewModel.state.successService){
                    setSignIn(result as ResultRequest)
                    navigation.navigate(NavigationUrl.CreditCardListScreen)
                }
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