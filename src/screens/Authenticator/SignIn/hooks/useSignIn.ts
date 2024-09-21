import { useContext, useRef, useState } from 'react';
import SignInState from 'screens/Authenticator/SignIn/screens/SignInState';
import SignInModel from 'screens/Authenticator/SignIn/model/SignInModel';
import SignInRespository from 'screens/Authenticator/SignIn/data/SignInRepository';
import { Success, Error, Unauthorized, ResultRequest } from 'api/ResultRequest';
import Validation from 'utils/Validation';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { NavigationUrl } from 'navigation/NavigationUrl';
import AuthenticatorContextApi from 'screens/Authenticator/AuthenticatorContextApi';

const useSignIn = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const { signUp , setSignIn } = useContext(AuthenticatorContextApi)
    const respository = SignInRespository();

    const [state, setState] = useState<SignInState>({
        errorEmail: '',
        errorPassword: '',
        isDisabledButton: true,
        isLoading: false,
        isKeepConnected: false,
        errorService: false,
        successService: false
    });

    const modelRef = useRef<SignInModel>({
        email: '', 
        password: '', 
        isKeepConnected: false
    });
    const model = modelRef.current

    const onEmail = (value: string) => {
        model.email = value
        if(state.errorEmail != ""){
            state.errorEmail = "",
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onPassword = (value: string) => {
        model.password = value
        if(state.errorPassword != "") {
            state.errorPassword = ""
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onKeepConnected = () => {
        state.isKeepConnected = !state.isKeepConnected
        setState({...state})
    }

    const handlerEnabledButton = () => {
        if(model.email.length > 5 && model.password.length > 5) {
            if(state.isDisabledButton){
                state.isDisabledButton = false
                setState({...state})
            }
        } else {
            if(!state.isDisabledButton){
                state.isDisabledButton = true
                setState({...state})
            }
        }
    }

    const onSubmit = async () => {
        if(!Validation().isValidEmail(model.email)) {
            state.errorEmail = "Email inválido"
            setState({...state})
            return
        }

        try {
            state.errorEmail = ""
            state.errorPassword = ""
            state.isLoading = true
            setState({...state})

            var response = await respository.signIn(
                model.email, 
                model.password
            )

            if(response instanceof Success) {
                state.successService = true
                console.log('Success ', response.data)
                setSignIn(response.data as ResultRequest<any>)
                navigation.navigate(NavigationUrl.CreditCardListScreen)
            } else if(response instanceof Unauthorized) {
                state.errorEmail = "Por favor, verifique seu e-mail"
                state.errorPassword = "Por favor, verifique sua senha"
                console.log('Unauthorized ', response)
            } else if(response instanceof Error) {
                state.errorService = true
                console.log('Error ', response)
            } else {
                state.errorService = true
                console.log('Failure ', response)
            }
        } catch(error) {
            state.errorService = true
           console.log('error  ', error)
        } finally {
            state.isLoading = false
            setState({...state})
        }
    }

    const onCloseErrorService = () => {
        state.errorService = false
        setState({...state})
    }

    return {
        state,
        onEmail,
        onPassword,
        onKeepConnected,
        onSubmit,
        onCloseErrorService,
        signUp,
    }
}

export default useSignIn;