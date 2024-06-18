import { CreditCardDefault } from "screens/creditcard/list/model/StyleCard";

export default interface CreditCardListModel {
    ROWID: string,
    idUser: string,
    number: string,
    nameUser: string,
    dateExpire: string,
    cvv: string,
    flag: string,
    status: string,
    styleCard: CreditCardDefault
}
