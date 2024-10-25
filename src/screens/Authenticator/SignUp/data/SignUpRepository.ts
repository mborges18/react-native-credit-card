import { Failure, Error, Success, Exists } from 'api/ResultRequest'
import SignUpModel from 'screens/Authenticator/SignUp/model/SignUpModel'
import { ToRequest } from 'screens/Authenticator/SignUp/data/SignUpMapper'
import apiService from 'api/Api'

export default function SignUpRespository() {

  const signUp = async (model: SignUpModel) => {
    var body = ToRequest(model)
    return apiService.Post<SignUpModel>('signup', body).then((response) => {
      if (response.code === 201) {
        return new Success(response.body)
      } else if (response.code === 409) {
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
