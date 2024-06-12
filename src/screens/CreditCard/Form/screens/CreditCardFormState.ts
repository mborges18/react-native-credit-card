
export default interface CreditCardFormState {
    step: number,
    errorNumber: string,
    errorName: string,
    errorDateExpire: string,
    errorCvv: string,
    isLoading: boolean,
    isDisabledButtonPrev: boolean,
    isDisabledButtonNext: boolean,
    isVisibleFieldNumber: boolean,
    isVisibleFieldName: boolean,
    isVisibleFieldDateExpire: boolean,
    isVisibleFieldCvv: boolean,
    errorService: boolean,
    successService: boolean,
}