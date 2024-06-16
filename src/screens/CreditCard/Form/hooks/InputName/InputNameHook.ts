import { useRef, useState } from "react";


export default function InputNameHook() {
    const [state, setState] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: false,
    });
    const valueRef = useRef<any>("SEU NOME");
    const valueData  = valueRef.current

    const onValue = (value: string) => {
        if(value.length<=25) {
        valueRef.current = value
        if(state.errorData != ""){
            state.errorData = ""
        }
        onValidateDate(value)
    }
    }

    const onValidateDate = (number: string) => {
        if(number.length>6){
            state.isValidData = true
        }
        setState({...state})
    }

    const handlerVisibility = (step: number) => {
        if(step==2) {
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