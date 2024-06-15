import { useRef, useState } from "react";


export default function InputDateHook() {
    const [state, setState] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: false,
    });
    const valueRef = useRef<any>("00/0000");
    const valueData  = valueRef.current

    const onValue = (value: string) => {
        valueRef.current = value
        if(state.errorData != ""){
            state.errorData = ""
        }
        onValidateData(value)
    }

    const onValidateData = (value: string) => {
        if(value.length==7){
            state.isValidData = true
        }
        setState({...state})
    }

    const handlerVisibility = (step: number) => {
        if(step==3) {
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