import CreditCardListModel from "./model/CreditCardListModel";

export default interface CreditCardListState {
    listCards: Array<CreditCardListModel>,
    isLoading: boolean,
    errorService: boolean,
    successService: boolean,
}