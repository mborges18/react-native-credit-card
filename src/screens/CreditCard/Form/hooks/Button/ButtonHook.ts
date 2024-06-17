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
        if(step==1) {
            if(isValidNumber){
                state.isDisabledButtonNext = false
                state.isDisabledButtonPrev = true
            } else {
                state.isDisabledButtonNext = true
                state.isDisabledButtonPrev = true
            }
        }
        if(step==2) {
            if(isValidName) {
                state.isDisabledButtonNext = false
                state.isDisabledButtonPrev = false
            } else {
                state.isDisabledButtonNext = true
                state.isDisabledButtonPrev = false
            }
        }
        if(step==3) {
            if(isValidDate) {
                state.isDisabledButtonNext = false
                state.isDisabledButtonPrev = false
            } else {
                state.isDisabledButtonNext = true
                state.isDisabledButtonPrev = false
            }
        }
        if(step==4) {
            if(isValidCvv) {
                state.isDisabledButtonNext = false
                state.isDisabledButtonPrev = false
            } else {
                state.isDisabledButtonNext = true
                state.isDisabledButtonPrev = false
            }
        }
        setState({...state}) 
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
            if(nameValue== "" || nameValue=="SEU NOME"){
                state.isDisabledButtonNext = true
            } else {
                state.isDisabledButtonNext = false
            }
        } else if(step==2) {
            step = 3
            if(dateValue == "" || dateValue == "00/0000"){
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
        console.log(nameValue + " "+step)
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