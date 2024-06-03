import {useRef, useState} from 'react';
import SignInState from './SignInState';
import SignInModel from './model/SignInModel';
import SignInRespository from './data/SignInRepository';
import { Success, Error, Unauthorized } from '../../../api/ResultRequest';
import Validation from '../../../utils/Validation';

export default function SignInViewModel() {
    const respository = SignInRespository();

    // const signInState = {isDisabledButton: true, isLoading: false} as SignInState;
    // const [state, setState] = useState<SignInState>(signInState);
    const [isDisabledButton, setIsDisabledButton] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isKeepConnected, setIsKeepConnected] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const signInModel = {email: '', password: '', isKeepConnected: false} as SignInModel;
    const modelRef = useRef<SignInModel>(signInModel);
    const model = modelRef.current

    const handlerEnabledButton = () => {
        if(modelRef.current.email.length > 5 && modelRef.current.password.length > 5) {
            setIsDisabledButton(false)
        } else {
            setIsDisabledButton(true)
        }
    }


    const onEmail = (value: string) => {
        model.email = value
        setErrorEmail("")
        handlerEnabledButton()
    }

    const onPassword = (value: string) => {
        model.password = value
        setErrorPassword("")
        handlerEnabledButton()
    }

    const onKeepConnected = () => {
        setIsKeepConnected(!isKeepConnected)
    }

    const onSubmit = async () => {

        if(!Validation().isValidEmail(model.email)) {
            setErrorEmail("Email inválido")
            return
        }

        try {
            setIsLoading(true)
            setErrorEmail("")
            setErrorPassword("")
            var response = await respository.signIn(
                model.email, 
                model.password
            )
            if(response instanceof Success) {
                console.log('Success ', response.data)
            } else if(response instanceof Unauthorized) {
                setErrorEmail("Por favor, verifique seu e-mail")
                setErrorPassword("Por favor, verifique sua senha")
                console.log('Unauthorized ', response)
            } else if(response instanceof Error) {
                console.log('Error ', response)
            } else {
                console.log('Failure ', response)
            }
            setIsLoading(false)
        } catch(error) {
            console.log('erro  ', error)
            setIsLoading(false)
        }
    }

    return {
        isDisabledButton,
        isLoading,
        isKeepConnected,
        errorEmail,
        errorPassword,
        onEmail,
        onPassword,
        onKeepConnected,
        onSubmit,
    }
}