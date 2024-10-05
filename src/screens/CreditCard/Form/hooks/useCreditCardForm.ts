import { useContext, useEffect, useState } from 'react';
import CreditCardFormState from 'screens/CreditCard/Form/screens/CreditCardFormState';
import useInputDate from 'screens/CreditCard/Form/hooks/inputdate/useInputDate';
import useInputCvv from 'screens/CreditCard/Form/hooks/inputcvv/useInputCvv';
import useInputName from 'screens/CreditCard/Form/hooks/inputname/useInputName';
import useButton from 'screens/CreditCard/Form/hooks/button/useButton';
import useInputNumber from 'screens/CreditCard/Form/hooks/inputnumber/useInputNumber';
import CreditCardFormRepository from 'screens/CreditCard/Form/data/CreditCardFormRepository';
import { Success } from 'api/ResultRequest';
import CreditCardFormModel from 'screens/CreditCard/Form/model/CreditCardFormModel';
import AuthenticatorContextApi from 'context/AuthenticatorContextApi';
import LogApp from 'utils/LogApp';

const useCreditCardForm = () => {
  const { signIn } = useContext(AuthenticatorContextApi);

  const respository = CreditCardFormRepository();
  const inputNumber = useInputNumber();
  const inputName = useInputName();
  const inputDate = useInputDate();
  const inputCvv = useInputCvv();
  const buttons = useButton();

  const [state, setState] = useState<CreditCardFormState>({
    step: 1,
    errorService: false,
    successService: false,
    isLoading: false,
    resultRequest: null,
  });

  const [model, setModel] = useState<CreditCardFormModel>({
    ROWID: '',
    idUser: '',
    number: inputNumber.valueData.current,
    nameUser: inputName.valueData.current,
    dateExpire: inputDate.valueData.current,
    cvv: inputCvv.valueData.current,
    flag: inputNumber.typeCardData,
    status: 'ENABLED',
  });

  const handlerEnabledButton = () => {
    buttons.handlerEnabledListener(
      state.step,
      inputNumber.state.isValidData,
      inputName.state.isValidData,
      inputDate.state.isValidData,
      inputCvv.state.isValidData,
    );
  };

  useEffect(() => {
    model.number = inputNumber.valueData;
    model.nameUser = inputName.valueData;
    model.dateExpire = inputDate.valueData;
    model.cvv = inputCvv.valueData;
    model.flag = inputNumber.typeCardData;
    setModel(model);
    console.log('useEffect', model);
  }, [inputNumber, inputName, inputDate, inputCvv, model]);

  const onPrev = () => {
    state.step = buttons.hanlderEnableClickPrev(state.step);
    handlerVisibilityInputs();
    setState({ ...state });
  };

  const onNext = () => {
    // you could validate here too
    state.step = buttons.hanlderEnableClickNext(
      state.step,
      inputName.valueData,
      inputDate.valueData,
      inputCvv.valueData,
      () => {
        createData();
      },
    );
    handlerVisibilityInputs();
    setState({ ...state });
  };

  const handlerVisibilityInputs = () => {
    inputNumber.handlerVisibility(state.step);
    inputName.handlerVisibility(state.step);
    inputDate.handlerVisibility(state.step);
    inputCvv.handlerVisibility(state.step);
  };

  const onEdit = (data?: CreditCardFormModel) => {
    if (data !== undefined && data != null) {
      inputNumber.onValue(data.number);
      inputName.onValue(data.nameUser);
      inputDate.onValue(data.dateExpire);
      inputCvv.onValue(data.cvv);
      state.step = 4;
      handlerVisibilityInputs();
      handlerEnabledButton();
      setState({ ...state });
    }
  };

  const onCloseErrorService = () => {
    state.errorService = false;
    setState({ ...state });
  };

  const onCloseSuccessService = () => {
    state.successService = false;
    setState({ ...state });
  };

  const createData = async () => {
    try {
      state.isLoading = true;
      model.idUser = signIn.toString().split('-')[0];
      var response = await respository.createData(model);

      if (response instanceof Success) {
        state.successService = true;
        LogApp('ENVIANDO DADOS ' + response.data);
        resetData();
      } else {
        state.resultRequest = response;
        state.errorService = true;
      }
    } catch (error) {
      state.errorService = true;
      LogApp('createData error ' + error);
    } finally {
      state.isLoading = false;
      setState({ ...state });
    }
  };

  const resetData = () => {
    setState({
      step: 1,
      errorService: false,
      successService: false,
      isLoading: false,
      resultRequest: null,
    });
    inputNumber.onValue('');
    inputName.onValue('');
    inputDate.onValue('');
    inputCvv.onValue('');
    inputNumber.onValue('');
  };

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
  };
};

export default useCreditCardForm;
