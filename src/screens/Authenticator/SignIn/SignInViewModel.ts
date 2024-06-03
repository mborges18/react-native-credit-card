import {useRef, useState} from 'react'
import SignInState from './SignInState'
import SignInModel from './model/SignInModel'
import SignInRespository from './data/SignInRepository'
import { Success, Error, Unauthorized } from '../../../api/ResultRequest';

export default function SignInViewModel() {
    const respository = SignInRespository();
    const [isLoading, setIsLoading] = useState(false);
    const signInState = { isKeepConnected: false} as SignInState;
    const dataRef = useRef<SignInState>(signInState);
    const state = dataRef.current

    const onSubmit = async () => {
        setIsLoading(true)
        state.isDisabledButton = true

        try{
            var response = await respository.signIn(
                state.email, 
                state.password
            )
            if(response instanceof Success) {
                console.log('Success ', response.data)
            } else if(response instanceof Unauthorized) {
                console.log('Unauthorized ', response)
            } else if(response instanceof Error) {
                console.log('Error ', response)
            } else {
                console.log('Failure ', response)
            }
            state.isDisabledButton = false
            setIsLoading(false)
        } catch(error) {
            console.log('erro  ', error)
            state.isDisabledButton = false
            setIsLoading(false)
        }
    }

    return {
        state,
        isLoading,
        onSubmit
    }
}