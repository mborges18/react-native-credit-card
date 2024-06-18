import { Api } from "api/Api"
import { Failure, Success, Error } from "api/ResultRequest"
import CreditCardFormModel from "../model/CreditCardFormModel"
import { ToRequest } from "./CreditCardFormMapper"

export default function CreditCardFormRepository() {
    const servise = Api()

    const createData = async (model: CreditCardFormModel) => {
        const body = ToRequest(model)
        return servise.Post('cards', body)
        .then((response) => {
            if (response.code===201) {
                return new Success(response.body)
            }else {
                return new Error(response)
            }
        })
        .catch((error) => {
            return new Failure(error)
        })
    }

    return {
        createData
    }
}