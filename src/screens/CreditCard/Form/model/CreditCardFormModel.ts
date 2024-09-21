import { flagCard } from "screens/CreditCard/List/model/CreditCardListModel";

export default interface CreditCardFormModel {
    ROWID: string,
    idUser: string,
    number: string,
    nameUser: string,
    dateExpire: string,
    cvv: string,
    flag: flagCard,
    status: string,
}
