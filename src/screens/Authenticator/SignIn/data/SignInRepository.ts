import apiService from 'api/Api'
import { Failure, Error, Success, Unauthorized } from 'api/ResultRequest'

export default function SignInRespository() {

    const signIn = async (email: string, password: string) => {
        return apiService.Post<string>('signin', {email: email, password: password})
        .then((response) => {
            if (response.code===200) {
                return new Success(response.body)
            } else if(response.code===401){
                return new Unauthorized()
            } else {
                return new Error(response)
            }
        })
        .catch((error) => {
            return new Failure(error)
        })
      }

      return {
        signIn
      }
}
