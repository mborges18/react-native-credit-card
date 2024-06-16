import { useRef, useState } from "react";
import StyleCard, { CreditCardDefault } from "screens/creditcard/list/model/StyleCard";
import Validation from "utils/Validation";


export default function InputNumberHook() {
    const [state, setState] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: true,
    });
    const maskNumber = "XXXX XXXX XXXX XXXX"
    const valueRef = useRef<any>(maskNumber);
    const valueData  = valueRef.current
    const typeCardRef = useRef<CreditCardDefault>(StyleCard().Undefined);
    const typeCardData  = typeCardRef.current

    const onValue = (value: string) => {
        let text = value + maskNumber.substring(0 + value.length)
        valueRef.current = text
        typeCardRef.current = Validation().validateCCNum(value)
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
        valueData,
        typeCardData
    }
}

interface InputState {
    errorData: string,
    isValidData: boolean,
    isVisibleField: boolean,
}