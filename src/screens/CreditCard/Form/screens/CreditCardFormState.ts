
export default interface CreditCardFormState {
    errorNumber: string,
    errorName: string,
    errorDateExpire: string,
    isDisabledButton: boolean,
    isLoading: boolean,
    isDisabledButtonPrev: boolean,
    isDisabledButtonNext: boolean,
    isVisibleFieldNumber: boolean,
    isVisibleFieldName: boolean,
    isVisibleFieldDateExpire: boolean,
    errorService: boolean,
    successService: boolean,
}