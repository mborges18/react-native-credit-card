import { useRef, useState } from "react";

interface InputState {
    errorData: string,
    isValidData: boolean,
    isVisibleField: boolean,
}

const useInputName = () => {
    const [state] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: false,
    });
    const maskName = "SEU NOME"

    const valueRefMasked = useRef<any>(maskName);
    const valueDataMask  = valueRefMasked.current

    const valueRef = useRef<any>("");
    const valueData  = valueRef.current

    const onValue = (value: string) => {
        valueRef.current = value
        valueRefMasked.current = value
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
        valueDataMask,
        valueData
    }
}

export default useInputName;