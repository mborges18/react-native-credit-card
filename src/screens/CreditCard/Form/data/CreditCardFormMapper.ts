import CreditCardFormModel from "../model/CreditCardFormModel"
import CreditCardFormRequest from "./CreditCardFormRequest"

export const ToRequest = (model: CreditCardFormModel) => {

    var body: CreditCardFormRequest = {
        ROWID: model.ROWID,
        idUser: model.idUser,
        number: model.number,
        nameUser: model.nameUser,
        dateExpire: model.dateExpire,
        cvv: model.cvv,
        flag: model.flag,
        status: 'ENABLED',
    }
    return body
}