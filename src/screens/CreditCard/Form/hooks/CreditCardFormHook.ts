import { useEffect, useState } from "react";
import CreditCardFormState from "screens/creditcard/form/screens/CreditCardFormState";
import InputDateHook from "screens/creditcard/form/hooks/inputdate/InputDateHook";
import InputCvvHook from "screens/creditcard/form/hooks/inputcvv/InputCvvHook";
import InputNumberHook from "screens/creditcard/form/hooks/inputnumber/InputNumberHook";
import InputNameHook from "screens/creditcard/form/hooks/inputname/InputNameHook";
import ButtonHook from "screens/creditcard/form/hooks/button/ButtonHook";
import CreditCardListModel from "screens/creditcard/list/model/CreditCardListModel";

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

    const [model, setModel] = useState<CreditCardListModel>(
        {
            ROWID: "1",
            idUser: "1",
            number: inputNumber.valueData,
            nameUser: inputName.valueData,
            dateExpire: inputDate.valueData,
            cvv: inputCvv.valueData,
            flag: inputNumber.typeCardData.name,
            styleCard: inputNumber.typeCardData,
            status: "ENABLED",
        }
    )

    const handlerEnabledButton = () => {
        buttons.handlerEnabledListener(
            state.step,
            inputNumber.state.isValidData,
            inputName.state.isValidData,
            inputDate.state.isValidData,
            inputCvv.state.isValidData
        )
    }

    useEffect(()=> {
        model.number = inputNumber.valueData
        model.nameUser = inputName.valueData
        model.dateExpire = inputDate.valueData
        model.cvv = inputCvv.valueData
        model.flag = inputNumber.typeCardData.name
        model.styleCard = inputNumber.typeCardData
        setModel(model)
    },[inputNumber, inputName, inputDate, inputCvv])

    const onPrev = () => {
        state.step = buttons.hanlderEnableClickPrev(state.step)
        handlerVisibilityInputs()
        setState({...state})
    }

    const onNext = () => {
        // you could validate here too
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
        handlerEnabledButton,
        model
    }
}