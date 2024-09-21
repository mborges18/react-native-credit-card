import MaskType from "components/TextField/MaskType";
import TextField from "components/TextField/TextField";
import ButtonDefault from "components/Button/ButtonDefault";
import useCreditCardForm from "screens/CreditCard/Form/hooks/useCreditCardForm";
import Itemcard from "screens/CreditCard/List/screens/ItemCard";
import DialogError from "components/Dialog/DialogError";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import LogApp from "utils/LogApp";
import CreditCardFormModel from "screens/CreditCard/Form/model/CreditCardFormModel";
import DialogSuccess from "components/Dialog/DialogSuccess";
import * as S from "./styles"
import StatusBarApp from "components/StatusBar/StatusBar";
import { getFlagCard } from "screens/CreditCard/List/model/StyleCard";

const CreditCardFormScreen = () => {

const {
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
} = useCreditCardForm()

const route = useRoute<RouteProp<ParamListBase>>();

useEffect(() => {
  LogApp("UPDATE ITEM", route.params as [0])
  onEdit((route.params as CreditCardFormModel))
}, [route.params])

return (
  <S.SafeAreaView>
  <StatusBarApp />
    <S.WrapperForm>

      <DialogError 
          title={"Informação"}
          description={ String(state.resultRequest?.data) }
          onClickConfirm={() => {
              onCloseErrorService()
          } } 
          isVisible={state.errorService}
      />

      <DialogSuccess 
          title={"Informação"} 
          description={String(state.resultRequest?.data)} 
          onClickConfirm={() => {
              onCloseSuccessService()
          } } 
          isVisible={state.successService} 
      />

      <Itemcard 
          number={inputNumber.valueDataMasked}
          name={inputName.valueDataMask}
          date={inputDate.valueDataMasked}
          cvv={inputCvv.valueData}
          creditCardType={getFlagCard(inputNumber.typeCardData)}
          isOpen={true}
          isFront={!inputCvv.state.isVisibleField} 
          isFlipable={true}
      />

      <S.RowInputs>
      <TextField 
          label={'Número do cartão'} 
          placeHolder={'Ex: 0000 0000 0000 0000'} 
          value={inputNumber.valueData}
          inputMode={'numeric'} 
          iconStart={'credit-card'} 
          maskType={MaskType.NUMBER_CARD}
          messageError={inputNumber.state.errorData} 
          isPassword={false} 
          listenerChangeText={(text) => {
              inputNumber.onValue(text)
              handlerEnabledButton()
          } }
          isVisible={inputNumber.state.isVisibleField}
      />
      <TextField 
          label={'Seu nome como está no cartão'} 
          placeHolder={'Ex: JOSÉ ROBERTO'} 
          value={inputName.valueData}
          inputMode={'text'}
          maxLength={25}
          iconStart={'person'} 
          messageError={inputName.state.errorData} 
          isPassword={false} 
          listenerChangeText={(text) => {
              inputName.onValue(text.toUpperCase())
              handlerEnabledButton()
          } }
          isVisible={inputName.state.isVisibleField}
      />
      <TextField 
          label={'Data de vencimento'} 
          placeHolder={'Ex: 00/0000'} 
          value={inputDate.valueData}
          inputMode={'numeric'} 
          iconStart={'calendar-month'} 
          maskType={MaskType.DATE_CARD}
          messageError={inputDate.state.errorData} 
          isPassword={false} 
          listenerChangeText={(text) => {
              inputDate.onValue(text)
              handlerEnabledButton()
          } }
          isVisible={inputDate.state.isVisibleField}
      />
      <TextField 
          label={'Código de seguraça'} 
          placeHolder={'Ex: 000'} 
          value={inputCvv.valueData}
          inputMode={'numeric'} 
          maxLength={4}
          iconStart={'security'} 
          messageError={inputCvv.state.errorData} 
          isPassword={false} 
          listenerChangeText={(text) => {
              inputCvv.onValue(text)
              handlerEnabledButton()
          } }
          isVisible={inputCvv.state.isVisibleField}
      />

      <S.RowForm>
          <ButtonDefault
              text={'Anterior'}
              width={50}
              isLoading={false}
              isDisabled={buttons.state.isDisabledButtonPrev}
              clickListener={onPrev} 
          />
          <S.Space />
          <ButtonDefault
              text={state.step!= 4 ? 'Próximo' : 'Salvar'}
              width={50}
              isLoading={state.isLoading}
              isDisabled={buttons.state.isDisabledButtonNext}
              clickListener={onNext} 
          />
      </S.RowForm>
      </S.RowInputs>
    </S.WrapperForm>
  </S.SafeAreaView>
);
}

export default CreditCardFormScreen;
