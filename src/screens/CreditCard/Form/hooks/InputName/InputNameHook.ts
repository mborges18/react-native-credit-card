import { useRef, useState } from "react";


export default function InputNameHook() {
    const [state] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: false,
    });
    const maskName = "SEU NOME"
    const valueRef = useRef<any>(maskName);
    const valueData  = valueRef.current

    const onValue = (value: string) => {
        valueRef.current = value
        if(state.errorData != ""){
            state.errorData = ""
        }
        onValidateData(value)
    }

    const onValidateData = (value: string) => {
        if(value.length > 10 && value.match(".*\\s.*")){
            state.isValidData = true
        } else {
            state.isValidData = false
            state.errorData = ""
        }
    }

    const handlerVisibility = (step: number) => {
        if(step==2) {
            state.isVisibleField = true
        } else {
            state.isVisibleField = false
        }
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