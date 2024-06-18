import { useContext, useEffect, useState } from "react";
import CreditCardFormState from "screens/creditcard/form/screens/CreditCardFormState";
import InputDateHook from "screens/creditcard/form/hooks/inputdate/InputDateHook";
import InputCvvHook from "screens/creditcard/form/hooks/inputcvv/InputCvvHook";
import InputNumberHook from "screens/creditcard/form/hooks/inputnumber/InputNumberHook";
import InputNameHook from "screens/creditcard/form/hooks/inputname/InputNameHook";
import ButtonHook from "screens/creditcard/form/hooks/button/ButtonHook";
import CreditCardFormRepository from "screens/creditcard/form/data/CreditCardFormRepository";
import { Success } from "api/ResultRequest";
import CreditCardFormModel from "screens/creditcard/form/model/CreditCardFormModel";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { NavigationUrl } from "navigation/NavigationUrl";
import AuthenticatorContextApi from "screens/authenticator/AuthenticatorContextApi";
import LogApp from "utils/LogApp";

export default function CreditCardFormHook() {

    const { signIn } = useContext(AuthenticatorContextApi)
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const respository = CreditCardFormRepository()
    const inputNumber = InputNumberHook()
    const inputName = InputNameHook()
    const inputDate = InputDateHook()
    const inputCvv = InputCvvHook()
    const buttons = ButtonHook()

    const [state, setState] = useState<CreditCardFormState>({
        step: 1,
        errorService: false,
        successService: false,
        isLoading: false,
        resultRequest: null,
    });

    const [model, setModel] = useState<CreditCardFormModel>({
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
            inputCvv.valueData,
            () => {
                createData()
            }
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

    const createData = async () => {

        try {
            state.isLoading = true
            model.idUser = signIn.toString().split("-")[0]
            var response = await respository.createData(model)

            if(response instanceof Success) {
                state.successService = true
                LogApp("ENVIANDO DADOS "+response.data)
                navigation.navigate(NavigationUrl.CreditCardListScreen, response.data)
            } else {
                state.errorService = true
            }
        } catch(error) {
            state.errorService = true
            LogApp("createData error "+error)
        } finally {
            state.isLoading = false
            setState({...state})
        }
    }

    const onCloseErrorService = () => {
        state.errorService = false
        setState({...state})
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
        model,
        createData,
        onCloseErrorService
    }
}