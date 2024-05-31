import React, {useState} from 'react';
import {View, Text, Switch, } from 'react-native';
import TextFieldDefault from '../../../components/TextField/TextFieldDefault';
import Theme from '../../../utils/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonDefault from '../../../components/button/ButtonDefault';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import SwitchButton from './SwitchButton';

const SignInScreen = () => {
    const [activated, setActivated] = useState(false);
    const ThemeApp = Theme();
    return (
        <GestureHandlerRootView>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 16}}>
        <Text style={{marginTop: 16, textAlign:'center', fontWeight:'bold', fontSize: 26, textTransform:'uppercase', color: ThemeApp.colors.text }}>
            <Icon name="lock" size={24} color="#000" /> Acessos</Text>

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
            iconStart={'at'} 
            messageError={''} 
            listenerChangeText={(text) => {
            } }
            isPassword={false} 
        />

        <TextFieldDefault 
            label={'Senha'} 
            placeHolder={'Ex: A@123'} 
            inputMode={'text'} 
            iconStart={'key'} 
            messageError={''} 
            listenerChangeText={(text) => {
            } }
            isPassword={true} 
        />

        <SwitchButton
            label={'Continuar conectado'}
            isOn={activated} 
            onToggle={() => {
                setActivated(!activated)
            }}        
        />

        <ButtonDefault text={'ACESSAR'} isLoading={false} clickListener={ () => {} } />

        </View>
        </ScrollView>
        </GestureHandlerRootView>
    );
}

export default SignInScreen;