import { useState } from "react";
import CreditCardFormState from "../screens/CreditCardFormState";
import InputDateHook from "./InputDate/InputDateHook";
import InputCvvHook from "./InputCvv/InputCvvHook";
import InputNumberHook from "./InputNumber/InputNumberHook";
import InputNameHook from "./InputName/InputNameHook";

export default function CreditCardFormHook() {

    const inputNumber = InputNumberHook()
    const inputName = InputNameHook()
    const inputDate = InputDateHook()
    const inputCvv = InputCvvHook()

    const [state, setState] = useState<CreditCardFormState>({
        step: 1,
        isLoading: false,
        isDisabledButtonPrev: true,
        isDisabledButtonNext: true,
        errorService: false,
        successService: false,
    });

    const handlerEnabledButton = () => {
        if(state.step==1 && inputNumber.state.isValidData) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = true
            setState({...state})
        }
        if(state.step==2 && inputName.state.isValidData) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        }
        if(state.step==3 && inputDate.state.isValidData) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        }
        if(state.step==4 && inputCvv.state.isValidData) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        } 
    }

    const onPrev = () => {
        if(state.step==4){
            state.step = 3
        } else if(state.step==3) {
            state.step = 2
        } else if(state.step==2) {
            state.isDisabledButtonPrev = true
            state.step = 1
        } else {
            state.isDisabledButtonPrev = true
        }
        
        handlerVisibilityInputs()

        state.isDisabledButtonNext = false
        setState({...state})
    }

    const onNext = () => {
        if(state.step==1){
            state.step = 2
            if(inputName.valueData == ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else if(state.step==2) {
            state.step = 3
            if(inputDate.valueData == ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else if(state.step==3) {
            state.step = 4
            if(inputCvv.valueData == ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else {
            //send data
        }

        handlerVisibilityInputs()

        state.isDisabledButtonPrev = false
        setState({...state})
    }

    const handlerVisibilityInputs = () => {
        inputNumber.handlerVisibility(state.step)
        inputName.handlerVisibility(state.step)
        inputDate.handlerVisibility(state.step)
        inputCvv.handlerVisibility(state.step)
    }

    return {
        state,
        inputNumber,
        inputName,
        inputDate,
        inputCvv,
        onPrev,
        onNext,
        handlerEnabledButton
    }
}