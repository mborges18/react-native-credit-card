import { createContext, useState } from "react";
import { ResultRequest } from 'api/ResultRequest'

interface AuthDate {
  setSignIn: (result: ResultRequest<any>) => void,
  signIn: ResultRequest<any>
  setSignUp: (result: ResultRequest<any>) => void,
  signUp: ResultRequest<any>
}

const AuthenticatorContextApi = createContext<AuthDate>({} as AuthDate);

export const AuthenticatorProvider = (props: AuthProps) => {
  const [signIn, setStateSignIn] = useState({} as ResultRequest<any>)
  const [signUp, setStateSignUp] = useState({} as ResultRequest<any>)

  async function setSignIn(result: ResultRequest<any>) {
    console.log("CONTEXT API => setSignIn = " + JSON.stringify(result))
    setStateSignIn(result)
  }

  async function setSignUp(result: ResultRequest<any>) {
    console.log("CONTEXT API => setSignUp = " + JSON.stringify(result))
    setStateSignUp(result)
  }

  return (
    <AuthenticatorContextApi.Provider value={{ setSignIn, signIn, setSignUp, signUp }}>
      {props.children}
    </AuthenticatorContextApi.Provider>
  );
}


type AuthProps = {
  children: any
}

export default AuthenticatorContextApi

