import React from 'react';
import { View } from 'react-native';
import TextField from 'components/textfield/TextField';
import ButtonDefault from 'components/button/ButtonDefault';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import SwitchButton from 'components/switch/SwitchButton';
import useSignIn from 'screens/authenticator/signin/hooks/useSignIn';
import ButtonOutline from 'components/button/ButtonOutline';
import HeaderWellCome from 'components/header/HeaderWellCome';
import DialogError from 'components/dialog/DialogError';
import SignUpModel from 'screens/authenticator/signup/model/SignUpModel';
import { LockKeyOpen } from 'phosphor-react-native';
import Theme from 'utils/AppTheme';

const SignInScreen = () => {

  const {
    state,
    signUp,
    onCloseErrorService,
    onEmail,
    onPassword,
    onKeepConnected,
    onSubmit,
  } = useSignIn()

  return (
    <GestureHandlerRootView>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
    <View style={{padding: 16}}>

    <DialogError 
      title={'Informação'}
      description={'Ocorreu um erro inesperado. Por favor, tente novamente em alguns instantes'}
      onClickConfirm={() => {
        onCloseErrorService()
      } } 
      isVisible={state.errorService}
      />
        
    <HeaderWellCome 
      title={'Acesso'} 
      icon={<LockKeyOpen size={24} weight="fill" color={Theme().colors.text}/>} 
      subTitle={'Seja bem vindo!'} 
      description={'Com a sua carteira de cartões de crádito você pode fazer suas transações de qualque lugar.'}
    />

    <TextField 
      label={'E-mail'}
      placeHolder={'Ex: nome@dominio.com'}
      value={(signUp.data as SignUpModel)?.email}
      inputMode={'email'}
      iconStart={'alternate-email'}
      messageError={state.errorEmail}
      isPassword={false}
      isVisible={true}
      listenerChangeText={onEmail} 
    />

    <TextField 
      label={'Senha'} 
      placeHolder={'Ex: A@123'} 
      inputMode={'text'} 
      iconStart={'key'} 
      messageError={state.errorPassword} 
      isPassword={true}
      isVisible={true}
      listenerChangeText={onPassword}
    />

    <SwitchButton
      label={'Continuar conectado'}
      isOn={state.isKeepConnected} 
      onToggle={onKeepConnected}        
    />

    <ButtonDefault 
      text={'ACESSAR'} 
      isLoading={state.isLoading} 
      clickListener={onSubmit} 
      isDisabled={state.isDisabledButton || state.isLoading} 
    />

    <ButtonOutline 
      text={'ESQUECI A SENHA'} 
      isLoading={false} 
      clickListener={() => {} } 
      isDisabled={false} 
    />

    </View>
    </ScrollView>
    </GestureHandlerRootView>
  );  
}

export default SignInScreen