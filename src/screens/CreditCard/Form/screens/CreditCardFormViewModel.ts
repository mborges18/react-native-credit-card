import { useRef, useState } from "react";
import CreditCardFormState from "./CreditCardFormState";
import CreditCardFormModel from "../model/CreditCardFormModel";

export default function CreditCardFormViewModel() {

    const [state, setState] = useState<CreditCardFormState>({
        errorNumber: "",
        errorName: "",
        errorDateExpire: "",
        isDisabledButton: true,
        isLoading: false,
        isDisabledButtonPrev: true,
        isDisabledButtonNext: true,
        isVisibleFieldNumber: true,
        isVisibleFieldName: true,
        isVisibleFieldDateExpire: true,
        errorService: false,
        successService: false,
    });
    const modelRef = useRef<CreditCardFormModel>({
        number: "",
        nameUser: "", 
        expireDate: "",
        cvv: "",
    });
    const model = modelRef.current

    const onNumber = (value: string) => {
        model.number = value
        if(state.errorNumber != ""){
            state.errorNumber = "",
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onName = (value: string) => {
        model.nameUser = value
        if(state.errorName != ""){
            state.errorName = "",
            setState({...state})
        }
        handlerEnabledButton()
    }

    const onDataExpire = (value: string) => {
        model.expireDate = value
        if(state.errorDateExpire != ""){
            state.errorDateExpire = "",
            setState({...state})
        }
        handlerEnabledButton()
    }

    const handlerEnabledButton = () => {
        if(model.number.length==19) {
            state.isDisabledButtonNext = false
            setState({...state})
        }
    }

    const onPrev = () => {}

    const onNext = () => {
        if(model.number != ''){
            setState({...state})
        }
    }

    return {
        state,
        onNumber,
        onName,
        onDataExpire,
        onPrev,
        onNext
    }
}