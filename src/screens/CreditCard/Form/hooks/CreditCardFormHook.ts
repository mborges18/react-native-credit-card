import { useRef, useState } from "react";
import CreditCardFormState from "../screens/CreditCardFormState";
import CreditCardFormModel from "../model/CreditCardFormModel";

export default function CreditCardFormHook() {

    const [state, setState] = useState<CreditCardFormState>({
        step: 1,
        errorNumber: "",
        errorName: "",
        errorDateExpire: "",
        errorCvv: "",
        isLoading: false,
        isDisabledButtonPrev: true,
        isDisabledButtonNext: true,
        isVisibleFieldNumber: true,
        isVisibleFieldName: false,
        isVisibleFieldDateExpire: false,
        isVisibleFieldCvv: false,
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
            state.errorNumber = ""
        }
        handlerEnabledButton()
    }

    const onName = (value: string) => {
        model.nameUser = value
        if(state.errorName != ""){
            state.errorName = ""
        }
        handlerEnabledButton()
    }

    const onDataExpire = (value: string) => {
        model.expireDate = value
        if(state.errorDateExpire != ""){
            state.errorDateExpire = ""
        }
        handlerEnabledButton()
    }

    const onDataCvv = (value: string) => {
        model.cvv = value
        if(state.errorCvv != ""){
            state.errorCvv = ""
        }
        handlerEnabledButton()
    }

    const handlerEnabledButton = () => {
        if(state.step==1 && model.number.length==19) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = true
            setState({...state})
        }
        if(state.step==2 && model.nameUser.length==5) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        }
        if(state.step==3 && model.expireDate.length==7) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        }
        if(state.step==4 && (model.cvv.length==3 || model.cvv.length==4)) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        } 
    }

    const onPrev = () => {
        if(state.step==4){
            state.step = 3
            state.isVisibleFieldNumber = false
            state.isVisibleFieldName = false
            state.isVisibleFieldDateExpire = true
            state.isVisibleFieldCvv = false
        } else if(state.step==3) {
            state.step = 2
            state.isVisibleFieldNumber = false
            state.isVisibleFieldName = true
            state.isVisibleFieldDateExpire = false
            state.isVisibleFieldCvv = false
        } else if(state.step==2) {
            state.isDisabledButtonPrev = true
            state.step = 1
            state.isVisibleFieldNumber = true
            state.isVisibleFieldName = false
            state.isVisibleFieldDateExpire = false
            state.isVisibleFieldCvv = false
        } else {
            state.isDisabledButtonPrev = true
        }

        state.isDisabledButtonNext = false
        setState({...state})
    }

    const onNext = () => {
        if(state.step==1){
            state.step = 2
            state.isVisibleFieldNumber = false
            state.isVisibleFieldName = true
            state.isVisibleFieldDateExpire = false
            state.isVisibleFieldCvv = false
            if(model.nameUser == ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else if(state.step==2) {
            state.step = 3
            state.isVisibleFieldNumber = false
            state.isVisibleFieldName = false
            state.isVisibleFieldDateExpire = true
            state.isVisibleFieldCvv = false
            if(model.expireDate == ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else if(state.step==3) {
            state.step = 4
            state.isVisibleFieldNumber = false
            state.isVisibleFieldName = false
            state.isVisibleFieldDateExpire = false
            state.isVisibleFieldCvv = true
            if(model.cvv == ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else {
            //send data
        }

        state.isDisabledButtonPrev = false
        console.log("onNext = ", state)
        setState({...state})
    }

    return {
        state,
        onNumber,
        onName,
        onDataExpire,
        onDataCvv,
        onPrev,
        onNext
    }
}