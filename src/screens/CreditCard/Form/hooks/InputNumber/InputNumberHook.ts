import { useRef, useState } from "react";
import StyleCard, { CreditCardDefault } from "screens/creditcard/list/model/StyleCard";
import Validation from "utils/Validation";

export default function InputNumberHook() {
    const [state] = useState<InputState>({
        errorData: "",
        isValidData: false,
        isVisibleField: true,
    });
    const styleCard = StyleCard()
    const maskNumber = "XXXX XXXX XXXX XXXX"
    const valueRef = useRef<any>(maskNumber);
    const valueData  = valueRef.current
    const typeCardRef = useRef<CreditCardDefault>(styleCard.Undefined);
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

    const onValidateData = (value: string) => {
        if(value.length==19){
            if(typeCardRef.current==styleCard.Undefined){
                state.isValidData = false
                state.errorData = "Cartão desconhecido"
            } else {
                state.isValidData = true
                state.errorData = ""
            }
        } else {
            state.isValidData = false
            state.errorData = ""
        }
    }

    const handlerVisibility = (step: number) => {
        if(step==1) {
            state.isVisibleField = true
        } else {
            state.isVisibleField = false
        }
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