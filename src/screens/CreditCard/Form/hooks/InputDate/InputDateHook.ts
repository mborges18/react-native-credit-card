import { useRef, useState } from "react";


export default function InputDateHook() {
    const [state] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: false,
    });
    const maskDate = "00/0000"
    const valueRef = useRef<any>(maskDate);
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
            var date = new Date()
    
            if(Number(value.split("/")[0]) < 1 || Number(value.split("/")[0]) > 12) {
                state.errorData = "Mês inválido"
                state.isValidData = false
            } else if(
                (Number(value.split("/")[0]) < date.getMonth()+1 && Number(value.split("/")[1]) == date.getFullYear())
                || Number(value.split("/")[1]) < date.getFullYear()
            ) {
                state.errorData = "Cartão expirado"
                state.isValidData = false
            } else {
                state.errorData = ""
                state.isValidData = true
            }
        } else {
            state.errorData = ""
            state.isValidData = false
        }
    }

    const handlerVisibility = (step: number) => {
        if(step==3) {
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