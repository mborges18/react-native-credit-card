import { useState } from "react";
import CreditCardFormState from "../screens/CreditCardFormState";
import InputDateHook from "./InputDate/InputDateHook";
import InputCvvHook from "./InputCvv/InputCvvHook";
import InputNumberHook from "./InputNumber/InputNumberHook";
import InputNameHook from "./InputName/InputNameHook";
import ButtonHook from "./Button/ButtonHook";

export default function CreditCardFormHook() {

    const inputNumber = InputNumberHook()
    const inputName = InputNameHook()
    const inputDate = InputDateHook()
    const inputCvv = InputCvvHook()
    const buttons = ButtonHook()

    const [state, setState] = useState<CreditCardFormState>({
        step: 1,
        errorService: false,
        successService: false,
    });

    const handlerEnabledButton = () => {
        buttons.handlerEnabledListener(
            state.step,
            inputNumber.state.isValidData,
            inputName.state.isValidData,
            inputDate.state.isValidData,
            inputCvv.state.isValidData
        )
    }

    const onPrev = () => {
        state.step = buttons.hanlderEnableClickPrev(state.step)

        handlerVisibilityInputs()
        setState({...state})
    }

    const onNext = () => {
        state.step = buttons.hanlderEnableClickNext(
            state.step,
            inputName.valueData,
            inputDate.valueData,
            inputCvv.valueData
        )
        handlerVisibilityInputs()
        setState({...state})
    }

    const handlerVisibilityInputs = () => {
        inputNumber.handlerVisibility(state.step)
        inputName.handlerVisibility(state.step)
        inputDate.handlerVisibility(state.step)
        inputCvv.handlerVisibility(state.step)
    }

    return {
        state,
        inputNumber,
        inputName,
        inputDate,
        inputCvv,
        buttons,
        onPrev,
        onNext,
        handlerEnabledButton
    }
}