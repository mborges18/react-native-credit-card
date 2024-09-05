import apiService from "api/Api";
import { Error, Failure, Success } from "api/ResultRequest";
import CreditCardListModel from "../model/CreditCardListModel";

export default function CreditCardListRespository() {
  const getData = async () => {
    return apiService.Get<CreditCardListModel[]>('cards').then((response) => {
      if (response.code === 200) {
        return new Success(response.body, "SUCCESS")
      } else {
        return new Error(response, "ERROR")
      }
    })
      .catch((error) => {
        return new Failure(error, "ERROR")
      })
  }

  return {
    getData
  }
}