import CreditCardListModel from "screens/creditcard/list/model/CreditCardListModel";

export default interface CreditCardListState {
    listCards: Array<CreditCardListModel>,
    itemDelete: string | null,
    isLoading: boolean,
    errorService: boolean,
    confirmDelete: boolean,
    successDeleteService: boolean,
}