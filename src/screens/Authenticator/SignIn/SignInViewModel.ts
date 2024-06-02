import {useRef, useState} from 'react'
import SignInState from './SignInState'
import SignInRespository from './data/SignInRepository'

export default function SignInViewModel() {
    const respository = SignInRespository();
    const signInState = { isKeepConnected: false} as SignInState;
    const [isLoading, setIsLoading] = useState(false);
    const dataRef = useRef<SignInState>(signInState);
    const state = dataRef.current

    const onSubmit = async () => {
        setIsLoading(true)
        state.isDisabledButton = true
        respository.login(
            dataRef.current.email, 
            dataRef.current.password
        ).then(success => {
            setTimeout(function(){
                setIsLoading(false)
            }, 4000);
            console.log('success ', success.body)
        }).catch(error => {
            console.log('erro  ', error)
        }).finally(() => {
            state.isDisabledButton = false
        })
    }

    return {
        state,
        isLoading,
        onSubmit
    }
}