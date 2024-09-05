import { useContext, useEffect, useState } from "react";
import CreditCardFormState from "screens/creditcard/form/screens/CreditCardFormState";
import useInputDate from "screens/creditcard/form/hooks/inputdate/useInputDate";
import useInputCvv from "screens/creditcard/form/hooks/inputcvv/useInputCvv";
import useInputNumber from "screens/creditcard/form/hooks/inputnumber/useInputNumber";
import useInputName from "screens/creditcard/form/hooks/inputname/useInputName";
import useButton from "screens/creditcard/form/hooks/button/useButton";
import CreditCardFormRepository from "screens/creditcard/form/data/CreditCardFormRepository";
import { Exists, Success } from "api/ResultRequest";
import CreditCardFormModel from "screens/creditcard/form/model/CreditCardFormModel";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { NavigationUrl } from "navigation/NavigationUrl";
import AuthenticatorContextApi from "screens/authenticator/AuthenticatorContextApi";
import LogApp from "utils/LogApp";

const useCreditCardForm = () => {

  const { signIn } = useContext(AuthenticatorContextApi)
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const respository = CreditCardFormRepository()
  const inputNumber = useInputNumber()
  const inputName = useInputName()
  const inputDate = useInputDate()
  const inputCvv = useInputCvv()
  const buttons = useButton()

  const [state, setState] = useState<CreditCardFormState>({
    step: 1,
    errorService: false,
    successService: false,
    isLoading: false,
    resultRequest: null,
  });

  const [model, setModel] = useState<CreditCardFormModel>({
    ROWID: "",
    idUser: "",
    number: inputNumber.valueData,
    nameUser: inputName.valueData,
    dateExpire: inputDate.valueData,
    cvv: inputCvv.valueData,
    flag: inputNumber.typeCardData.name,
    styleCard: inputNumber.typeCardData,
    status: "ENABLED",
  })

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

  const onEdit = (model?: CreditCardFormModel) => {
    if(model != undefined && model != null) {
        inputNumber.onValue(model.number)
        inputName.onValue(model.nameUser)
        inputDate.onValue(model.dateExpire)
        inputCvv.onValue(model.cvv)
        state.step = 4
        handlerVisibilityInputs()
        handlerEnabledButton()
        setState({...state})
    }
}

  const onCloseErrorService = () => {
    state.errorService = false
    setState({...state})
  }

  const onCloseSuccessService = () => {
    state.successService = false
    setState({...state})
  }

  const createData = async () => {
    try {
      state.isLoading = true
      model.idUser = signIn.toString().split("-")[0]
      var response = await respository.createData(model)

      if(response instanceof Success) {
        state.successService = true
        LogApp("ENVIANDO DADOS "+response.data)
        //navigation.navigate(NavigationUrl.CreditCardListScreen, response.data)
      }  else {
        state.resultRequest = response
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

  return {
    model,
    state,
    inputNumber,
    inputName,
    inputDate,
    inputCvv,
    buttons,
    onPrev,
    onNext,
    onCloseErrorService,
    onCloseSuccessService,
    onEdit,
    handlerEnabledButton,
  }
}

export default useCreditCardForm;