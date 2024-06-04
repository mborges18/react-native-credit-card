import {Api} from '../../../../api/Api'
import {Failure, Error, Success, Unauthorized } from '../../../../api/ResultRequest'
import SignUpModel from '../model/SignUpModel'

export default function SignUpRespository() {
    const Servise = Api()

    const signUp = async (model: SignUpModel) => {
        return Servise.Post('signup', model)
        .then((response) => {
            if (response.code===200) {
                return new Success(response.body)
            } else if(response.code===401){
                return new Unauthorized
            } else {
                return new Error(response)
            }
        })
        .catch((error) => {
            return new Failure(error)
        })
      }

      return {
        signUp
      }
}
