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
                messageError={FormHook.state.errorNumber} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    FormHook.onNumber(text)
                } }
                isVisible={FormHook.state.isVisibleFieldNumber}
            />
            <TextFieldDefault 
                label={'Nome do titular'} 
                placeHolder={'Ex: JOSÉ ROBERTO'} 
                inputMode={'text'} 
                iconStart={'person'} 
                messageError={FormHook.state.errorName} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    FormHook.onName(text)
                } }
                isVisible={FormHook.state.isVisibleFieldName}
            />
            <TextFieldDefault 
                label={'Data de vencimento'} 
                placeHolder={'Ex: 00/0000'} 
                inputMode={'numeric'} 
                iconStart={'calendar-month'} 
                maskType={MaskType.DATE_CARD}
                messageError={FormHook.state.errorDateExpire} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    FormHook.onDataExpire(text)
                } }
                isVisible={FormHook.state.isVisibleFieldDateExpire}
            />

            <TextFieldDefault 
                label={'Código de seguraça'} 
                placeHolder={'Ex: 000'} 
                inputMode={'numeric'} 
                iconStart={'security'} 
                messageError={FormHook.state.errorCvv} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    FormHook.onDataCvv(text)
                } }
                isVisible={FormHook.state.isVisibleFieldCvv}
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