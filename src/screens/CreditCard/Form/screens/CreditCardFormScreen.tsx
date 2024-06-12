import { SafeAreaView, StatusBar, View , Text} from "react-native";
import MaskType from "../../../../components/TextField/MaskType";
import TextFieldDefault from "../../../../components/TextField/TextFieldDefault";
import ButtonDefault from "../../../../components/Button/ButtonDefault";
import Theme from "../../../../utils/AppTheme";
import CreditCardFormHook from "../hooks/CreditCardFormHook";

const CreditCardFormScreen = () => {
    const ThemeApp = Theme()
    const FormHook = CreditCardFormHook()

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={ ThemeApp.colors.primary } />
        <View style={{ flex: 1 , flexDirection: 'column', padding: 16, justifyContent: 'space-between', alignContent:'center', alignItems: 'center'}}>
           
           {FormHook.state.step==4 ? <Text>CARTÃO VERSO</Text> : <Text>CARTÃO FRENTE</Text>}

            <View style={{ width: '100%' }}>
            <TextFieldDefault 
                label={'Número do cartão'} 
                placeHolder={'Ex: 0000 0000 0000 0000'} 
                inputMode={'numeric'} 
                iconStart={'credit-card'} 
                maskType={MaskType.NUMBER_CARD}
                messageError={FormHook.inputNumber.state.errorData} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    FormHook.inputNumber.onValue(text)
                    FormHook.handlerEnabledButton()
                } }
                isVisible={FormHook.inputNumber.state.isVisibleField}
            />
            <TextFieldDefault 
                label={'Nome do titular'} 
                placeHolder={'Ex: JOSÉ ROBERTO'} 
                inputMode={'text'} 
                iconStart={'person'} 
                messageError={FormHook.inputName.state.errorData} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    FormHook.inputName.onValue(text)
                    FormHook.handlerEnabledButton()
                } }
                isVisible={FormHook.inputName.state.isVisibleField}
            />
            <TextFieldDefault 
                label={'Data de vencimento'} 
                placeHolder={'Ex: 00/0000'} 
                inputMode={'numeric'} 
                iconStart={'calendar-month'} 
                maskType={MaskType.DATE_CARD}
                messageError={FormHook.inputDate.state.errorData} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    FormHook.inputDate.onValue(text)
                    FormHook.handlerEnabledButton()
                } }
                isVisible={FormHook.inputDate.state.isVisibleField}
            />
            <TextFieldDefault 
                label={'Código de seguraça'} 
                placeHolder={'Ex: 000'} 
                inputMode={'numeric'} 
                iconStart={'security'} 
                messageError={FormHook.inputCvv.state.errorData} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    FormHook.inputCvv.onValue(text)
                    FormHook.handlerEnabledButton()
                } }
                isVisible={FormHook.inputCvv.state.isVisibleField}
            />

            <View style={{ flexDirection:'row', width: '100%', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                <ButtonDefault
                    text={'Anterior'}
                    width='50%'
                    isLoading={false}
                    isDisabled={FormHook.state.isDisabledButtonPrev}
                    clickListener={() => {
                        FormHook.onPrev()
                    }} 
                />
                <View style={{width: 8}} />
                <ButtonDefault
                    text={'Próximo'}
                    width='50%'
                    isLoading={FormHook.state.isLoading}
                    isDisabled={FormHook.state.isDisabledButtonNext}
                    clickListener={() => {
                        FormHook.onNext()
                    }} 
                />
            </View>
            </View>
            </View>
        </SafeAreaView>
    );
}

export default CreditCardFormScreen;