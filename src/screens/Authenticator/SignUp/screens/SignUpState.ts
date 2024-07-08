
export default interface SignUpState {
    errorName: string,
    errorBirthDate: string,
    errorPhone: string,
    errorEmail: string,
    errorPassword: string,
    errorConfirmPassword: string,
    isDisabledButton: boolean,
    isLoading: boolean,
    errorService: boolean,
    successService: boolean,
}