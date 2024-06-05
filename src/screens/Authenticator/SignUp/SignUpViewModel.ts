import { useState, useRef } from "react";
import SignUpState from "./SignUpState";
import SignUpModel from "./model/SignUpModel"
import Validation from "../../../utils/Validation";
import { Success, Unauthorized } from "../../../api/ResultRequest";
import SignUpRespository from "./data/SignUpRepository";

export default function  SignUpViewModel() {
    const respository = SignUpRespository();

    const [state, setState] = useState<SignUpState>({
        errorName: '',
        errorBirthDate: '',
        errorPhone: '',
        errorEmail: '',
        errorPassword: '',
        errorConfirmPassword: '',
        isDisabledButton: false,
        isLoading: false,
    });

    const modelRef = useRef<SignUpModel>({
        name: '',
        birthDate: '',
        phone: '',
        email: '', 
        password: '', 
        confirmPassword: '',
        status: '', 
    });
    const model = modelRef.current

    const onName = (value: string) => {
        model.name = value
        if(state.errorName != ""){
            state.errorName = "",
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onBirthDate = (value: string) => {
        model.birthDate = value
        if(state.errorBirthDate != ""){
            state.errorBirthDate = "",
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onPhone= (value: string) => {
        model.phone = value
        if(state.errorPhone != ""){
            state.errorPhone= "",
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onEmail = (value: string) => {
        model.email = value
        if(state.errorEmail != ""){
            state.errorEmail = "",
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onPassword = (value: string) => {
        model.password = value
        if(state.errorPassword != "") {
            state.errorPassword = ""
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onConfirmPassword = (value: string) => {
        model.confirmPassword = value
        if(state.errorConfirmPassword != "") {
            state.errorConfirmPassword = ""
            setState({...state})
        }
        handlerEnabledButton()
    }

    const handlerEnabledButton = () => {
        // if(model.email.length > 5 && model.password.length > 5) {
        //     if(state.isDisabledButton){
        //         state.isDisabledButton = false
        //         setState({...state})
        //     }
        // } else {
        //     if(!state.isDisabledButton){
        //         state.isDisabledButton = true
        //         setState({...state})
        //     }
        // }
    }

    const onSubmit = async () => {
        var hasError = false

        const fullname = model.name.split(" ")
        if(fullname.length==1) {
            state.errorName = "Informe o sobre nome"
            hasError = true
        }

        const day = Number(model.birthDate.split('/')[0])
        const month = Number(model.birthDate.split('/')[1])
        const year = Number(model.birthDate.split('/')[2])

        if(!Validation().isValidDay(day, month, year)) {
            state.errorBirthDate = "Dia inválido"
            hasError = true
        } 
        else if(month < 1 || month > 12){
            state.errorBirthDate = "Mês inválido"
            hasError = true
        } 
        else if(!Validation().isValidDateBefore(day, month, year)){
            state.errorBirthDate = "Data inválida"
            hasError = true
        }
        else if(!Validation().isValidDatePermission(day, month, year)){
            state.errorBirthDate = "Proibido menores de 14 anos"
            hasError = true
        }

        if(!Validation().isValidEmail(model.email)) {
            state.errorEmail = "E-mail inválido"
            hasError = true
        }

        if(!Validation().isValidPhoneCell(model.phone)){
            state.errorPhone = "Celular inválido"
            hasError = true
        }

        if(hasError){
            setState({...state})
            return
        }

        try {
            state.errorName = ""
            state.errorBirthDate = ""
            state.errorPhone = ""
            state.errorEmail = ""
            state.errorPassword = ""
            state.errorConfirmPassword = ""
            state.isLoading = true
            setState({...state})

            var response = await respository.signUp(model)

            if(response instanceof Success) {
                console.log('Success ', response.data)
            } else if(response instanceof Unauthorized) {
                state.errorEmail = "Por favor, verifique seu e-mail"
                state.errorPassword= "Por favor, verifique sua senha"
                setState({...state})
                console.log('Unauthorized ', response)
            } else if(response instanceof Error) {
                console.log('Error ', response)
            } else {
                console.log('Failure ', response)
            }
            state.isLoading = false
            setState({...state})
        } catch(error) {
           console.log('erro  ', error)
           state.isLoading = false
           setState({...state})
        }
    }

    return {
        state,
        onName,
        onBirthDate,
        onPhone,
        onEmail,
        onPassword,
        onConfirmPassword,
        onSubmit
    }
}