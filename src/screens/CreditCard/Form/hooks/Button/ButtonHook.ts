import { useState } from "react";


export default function ButtonHook() {
    const [state, setState] = useState<InputState>({
        isDisabledButtonPrev: true,
        isDisabledButtonNext: true,
    });

    const handlerEnabledListener = (
        step: number,
        isValidNumber: boolean,
        isValidName: boolean,
        isValidDate: boolean,
        isValidCvv: boolean,
    ) => {
        if(step==1 && isValidNumber) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = true
            setState({...state})
        }
        if(step==2 && isValidName) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        }
        if(step==3 && isValidDate) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        }
        if(step==4 && isValidCvv) {
            state.isDisabledButtonNext = false
            state.isDisabledButtonPrev = false
            setState({...state})
        } 
    }

    const hanlderEnableClickPrev = (step: number) => {
        if(step==4){
            step = 3
        } else if(step==3) {
            step = 2
        } else if(step==2) {
            state.isDisabledButtonPrev = true
            step = 1
        } else {
            state.isDisabledButtonPrev = true
        }
        state.isDisabledButtonNext = false

        return step
    }

    const hanlderEnableClickNext = (
        step: number,
        nameValue: string,
        dateValue: string,
        cvvValue: string,
    ) => {

        if(step==1){
            step = 2
            if(nameValue== ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else if(step==2) {
            step = 3
            if(dateValue == ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else if(step==3) {
            step = 4
            if(cvvValue == ""){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else {
            //send data
        }
        state.isDisabledButtonPrev = false
        return step
    }

    return {
        state,
        handlerEnabledListener,
        hanlderEnableClickPrev,
        hanlderEnableClickNext
    }
}

interface InputState {
    isDisabledButtonPrev: boolean,
    isDisabledButtonNext: boolean,
}