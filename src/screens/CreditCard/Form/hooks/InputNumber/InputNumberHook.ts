import { useRef, useState } from "react";


export default function InputNumberHook() {
    const [state, setState] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: true,
    });
    const valueRef = useRef<any>("XXXX XXXX XXXX XXXX");
    const valueData  = valueRef.current

    const onValue = (value: string) => {
        valueRef.current = value
        if(state.errorData != ""){
            state.errorData = ""
        }
        onValidateData(value)
    }

    const onValidateData = (number: string) => {
        if(number.length==19){
            state.isValidData = true
        }
        setState({...state})
    }

    const handlerVisibility = (step: number) => {
        if(step==1) {
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