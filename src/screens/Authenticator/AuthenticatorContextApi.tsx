import { createContext, useState } from "react";
import { ResultRequest } from 'api/ResultRequest'

interface AuthDate {
    setSignIn:  (result: ResultRequest) => void,
    signIn : ResultRequest
    setSignUp:  (result: ResultRequest) => void,
    signUp : ResultRequest
}

const AuthenticatorContextApi = createContext({} as AuthDate);

export const AuthenticatorProvider = (props: AuthProps) => {
    const[signIn, setStateSignIn] = useState({} as ResultRequest)
    const[signUp, setStateSignUp] = useState({} as ResultRequest)

    async function setSignIn(result: ResultRequest) {
        console.log("CONTEXT API => setSignIn = " +JSON.stringify(result))
        setStateSignIn(result)
    }

    async function setSignUp(result: ResultRequest) {
        console.log("CONTEXT API => setSignUp = " +JSON.stringify(result))
        setStateSignUp(result)
    }

    return(
        <AuthenticatorContextApi.Provider value={{setSignIn, signIn, setSignUp, signUp}}>
            {props.children}
        </AuthenticatorContextApi.Provider>
    );
}


type AuthProps = {
    children: any
}

export default AuthenticatorContextApi

