
import SignUpRequest from 'screens/authenticator/signup/data/SignUpRequest'
import SignUpModel from 'screens/authenticator/signup/model/SignUpModel'

export const ToRequest = (model: SignUpModel) => {
    var date = model.birthDate.split('/')
    model.birthDate = date[2]+'-'+date[1]+'-'+date[0]
    var body: SignUpRequest = {
        name: model.name,
        birthDate: model.birthDate,
        phone: model.phone,
        email: model.email,
        password: model.password,
        status: 'ENABLED'
    }
    return body
}