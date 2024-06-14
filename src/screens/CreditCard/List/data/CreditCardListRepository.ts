import { Api } from "api/Api";
import { Error, Failure, Success } from "api/ResultRequest";

export default function CreditCardListRespository() {
    const Servise = Api()

    const getData = async () => {
        return Servise.Get('cards')
        .then((response) => {
            if (response.code===200) {
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
        getData
    }
}