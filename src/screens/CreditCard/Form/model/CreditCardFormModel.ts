import { CreditCardDefault } from "screens/CreditCard/List/model/StyleCard";

export default interface CreditCardFormModel {
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
