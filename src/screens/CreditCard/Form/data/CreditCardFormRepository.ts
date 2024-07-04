import { Api } from "api/Api"
import { Failure, Success, Error, Exists } from "api/ResultRequest"
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
            } else if (response.code===409){
                return new Exists("Este cartão já está regsitrado. Por favor, cadastre outro cartão.")
            } else {
                return new Error("Ocorreu um erro inesperado. Por favor, tente novamente em alguns instantes")
            }
        })
        .catch((error) => {
            return new Failure("Ocorreu um erro inesperado. Por favor, tente novamente em alguns instantes")
        })
    }

    return {
        createData
    }
}