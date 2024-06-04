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
        isDisabledButton: true,
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
        if(model.email.length > 5 && model.password.length > 5) {
            if(state.isDisabledButton){
                state.isDisabledButton = false
                setState({...state})
            }
        } else {
            if(!state.isDisabledButton){
                state.isDisabledButton = true
                setState({...state})
            }
        }
    }

    const onSubmit = async () => {
        if(!Validation().isValidEmail(model.email)) {
            state.errorEmail = "Email inválido"
            setState({...state})
            return
        }

        try {
            state.errorEmail = ""
            state.errorPassword = ""
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