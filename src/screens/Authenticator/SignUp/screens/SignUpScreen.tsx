import React from "react";
import { View } from "react-native";
import TextField from "components/TextField/TextField";
import ButtonDefault from "components/Button/ButtonDefault";
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler";
import useSignUp from "screens/Authenticator/SignUp/hooks/useSignUp";
import MaskType from "components/TextField/MaskType";
import HeaderWellCome from "components/Header/HeaderWellCome";
import DialogError from "components/Dialog/DialogError";
import * as S from "./styles"
import { ClipboardText } from 'phosphor-react-native';
import { ThemeDefaultApp } from "utils/AppTheme";

const SignUpScreen = () => {

  const {
    state,
    handlerDisabledButton,
    onName,
    onBirthDate,
    onPhone,
    onEmail,
    onPassword,
    onConfirmPassword,
    onSubmit,
    onCloseErrorService
  } = useSignUp()

  return (
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <View style={{ padding: 16 }}>

          <DialogError
            title={'Informação'}
            description={'Ocorreu um erro inesperado. Por favor, tente novamente em alguns instantes'}
            onClickConfirm={onCloseErrorService}
            isVisible={state.errorService}
          />

          <HeaderWellCome
            title={'Cadastro'}
            icon={<ClipboardText size={24} weight="fill" color={ThemeDefaultApp.colors.text}/>} 
            subTitle={'Seja bem vindo!'}
            description={'Com a sua carteira de cartões de crádito você pode fazer suas transações de qualque lugar.'}
          />

          <S.TitleSection>Dados de pessoais</S.TitleSection>

          <TextField
            label={'Nome e sobrenome'}
            placeHolder={'Ex: José Roberto'}
            inputMode={'text'}
            iconStart={'person'}
            messageError={state.errorName}
            isPassword={false}
            isVisible={true}
            listenerChangeText={onName}
          />

          <TextField
            label={'Data de nascimento'}
            placeHolder={'Ex: 00/00/0000'}
            inputMode={'numeric'}
            iconStart={'calendar-month'}
            maskType={MaskType.DATE}
            messageError={state.errorBirthDate}
            isPassword={false}
            isVisible={true}
            listenerChangeText={onBirthDate}
          />

          <TextField
            label={'Celular'}
            placeHolder={'Ex: (00) 00000-0000'}
            inputMode={'numeric'}
            iconStart={'phone-iphone'}
            maskType={MaskType.PHONE}
            messageError={state.errorPhone}
            isPassword={false}
            isVisible={true}
            listenerChangeText={onPhone}
          />

          <TextField
            label={'E-mail'}
            placeHolder={'Ex: nome@dominio.com'}
            inputMode={'email'}
            iconStart={'alternate-email'}
            messageError={state.errorEmail}
            isPassword={false}
            isVisible={true}
            listenerChangeText={onEmail}
          />

          <S.TitleSection>Dados de acesso</S.TitleSection>

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

          <TextField
            label={'Confirme a senha'}
            placeHolder={'Ex: A@123'}
            inputMode={'text'}
            iconStart={'key'}
            isVisible={true}
            messageError={state.errorConfirmPassword}
            isPassword={true}
            listenerChangeText={onConfirmPassword}
          />

          <ButtonDefault
            text={'CADASTRAR'}
            isLoading={state.isLoading}
            clickListener={onSubmit}
            isDisabled={handlerDisabledButton()}
          />

        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default SignUpScreen