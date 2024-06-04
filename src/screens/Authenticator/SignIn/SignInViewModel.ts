import {useRef, useState} from 'react';
import SignInState from './SignInState';
import SignInModel from './model/SignInModel';
import SignInRespository from './data/SignInRepository';
import { Success, Error, Unauthorized } from '../../../api/ResultRequest';
import Validation from '../../../utils/Validation';

export default function SignInViewModel() {
    const respository = SignInRespository();

    const [state, setState] = useState<SignInState>({
        errorEmail: '',
        errorPassword: '',
        isDisabledButton: true,
        isLoading: false,
        isKeepConnected: false,
    });

    const signInModel = {email: '', password: '', isKeepConnected: false} as SignInModel;
    const modelRef = useRef<SignInModel>(signInModel);
    const model = modelRef.current

    const handlerEnabledButton = () => {
        if(modelRef.current.email.length > 5 && modelRef.current.password.length > 5) {
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
                console.log('Success ', response.data)
            } else if(response instanceof Unauthorized) {
                state.errorEmail = "Por favor, verifique seu e-mail"
                state.errorPassword= "Por favor, verifique sua senha"
                setState({...state})
                console.log('Unauthorized ', response)
            } else if(response instanceof Error) {
                console.log('Error ', response)
            } else {
                console.log('Failure ', response)
            }
            state.isLoading = false
            setState({...state})
        } catch(error) {
           console.log('erro  ', error)
           state.isLoading = false
           setState({...state})
        }
    }

    return {
        state,
        onEmail,
        onPassword,
        onKeepConnected,
        onSubmit,
    }
}