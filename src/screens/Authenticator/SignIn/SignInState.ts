
export default interface SignInState {
    isKeepConnected: boolean,
    email: string,
    password: string
    errorEmail: string,
    errorPassword: string,
    isDisabledButton: boolean,
}