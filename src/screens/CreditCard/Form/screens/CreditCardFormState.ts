import { ResultRequest } from "api/ResultRequest";

export default interface CreditCardFormState {
    step: number,
    errorService: boolean,
    successService: boolean,
    isLoading: boolean,
    resultRequest: ResultRequest | null
}