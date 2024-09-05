import { Failure, Success, Error, Exists } from "api/ResultRequest"
import CreditCardFormModel from "../model/CreditCardFormModel"
import { ToRequest } from "./CreditCardFormMapper"
import apiService from "api/Api"

export default function CreditCardFormRepository() {
  const createData = async (model: CreditCardFormModel) => {
    const body = ToRequest(model)
    return apiService.Post('cards', body).then((response) => {
      if (response.code === 201) {
        return new Success(response.body)
      } else if (response.code === 409) {
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