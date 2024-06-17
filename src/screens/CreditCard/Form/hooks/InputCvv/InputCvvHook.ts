import { useRef, useState } from "react";


export default function InputCvvHook() {
    const [state, setState] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: false,
    });
    const valueRef = useRef<any>("");
    const valueData  = valueRef.current

    const onValue = (value: string) => {
        valueRef.current = value
        if(state.errorData != ""){
            state.errorData = ""
        }
        onValidateData(value)
    }

    const onValidateData = (value: string) => {
        if(value.length==3 || value.length==4){
            if(Number(value)==0) {
                state.isValidData = false
                state.errorData = "Código inválido"
            } else {
                state.isValidData = true
                state.errorData = ""
            }
        } else {
            state.isValidData = false
            state.errorData = ""
        }
        setState({...state})
    }

    const handlerVisibility = (step: number) => {
        if(step==4) {
            state.isVisibleField = true
        } else {
            state.isVisibleField = false
        }
        setState({...state})
    }

    return {
        state,
        handlerVisibility,
        onValue,
        valueData
    }
}

interface InputState {
    errorData: string,
    isValidData: boolean,
    isVisibleField: boolean,
}