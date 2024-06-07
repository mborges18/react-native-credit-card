import {Api} from '../../../../api/Api'
import {Failure, Error, Success, Exists } from '../../../../api/ResultRequest'
import SignUpModel from '../model/SignUpModel'
import { ToRequest } from './SignUpMapper'

export default function SignUpRespository() {
    const Servise = Api()

    const signUp = async (model: SignUpModel) => {
        var body = ToRequest(model)
        return Servise.Post('signup', body)
        .then((response) => {
            if (response.code===201) {
                return new Success(response.body)
            } else if(response.code===409){
                return new Exists
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
