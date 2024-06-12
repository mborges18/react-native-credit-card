import CreditCardListModel from "./model/CreditCardListModel";

export default interface CreditCardListState {
    listCards: Array<CreditCardListModel>,
    itemDelete: CreditCardListModel | null,
    isLoading: boolean,
    errorService: boolean,
    confirmDelete: boolean,
    successDeleteService: boolean,
}