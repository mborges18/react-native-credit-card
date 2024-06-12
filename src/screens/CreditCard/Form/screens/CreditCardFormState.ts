
export default interface CreditCardFormState {
    step: number,
    isLoading: boolean,
    isDisabledButtonPrev: boolean,
    isDisabledButtonNext: boolean,
    errorService: boolean,
    successService: boolean,
}