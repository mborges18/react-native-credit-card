import { SafeAreaView, StatusBar, View } from "react-native";
import MaskType from "../../../../components/TextField/MaskType";
import TextFieldDefault from "../../../../components/TextField/TextFieldDefault";
import ButtonDefault from "../../../../components/Button/ButtonDefault";
import Theme from "../../../../utils/AppTheme";
import CreditCardFormViewModel from "./CreditCardFormViewModel";

const CreditCardFormScreen = () => {
    const ThemeApp = Theme()
    const viewModel = CreditCardFormViewModel()

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={ ThemeApp.colors.primary } />
        <View style={{ flexDirection: 'column', padding: 16, justifyContent: 'center', alignContent:'center', alignItems: 'center'}}>
            <TextFieldDefault 
                label={'Número do cartão'} 
                placeHolder={'Ex: 0000 0000 0000 0000'} 
                inputMode={'numeric'} 
                iconStart={'credit-card'} 
                maskType={MaskType.NUMBER_CARD}
                messageError={viewModel.state.errorNumber} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    viewModel.onNumber(text)
                } }
                isVisible={viewModel.state.isVisibleFieldNumber}
            />
            <TextFieldDefault 
                label={'Nome do titular'} 
                placeHolder={'Ex: JOSÉ ROBERTO'} 
                inputMode={'text'} 
                iconStart={'person'} 
                messageError={viewModel.state.errorName} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    viewModel.onName(text)
                } }
                isVisible={viewModel.state.isVisibleFieldName}
            />
            <TextFieldDefault 
                label={'Data de vencimento'} 
                placeHolder={'Ex: 00/0000'} 
                inputMode={'numeric'} 
                iconStart={'calendar-month'} 
                maskType={MaskType.DATE_CARD}
                messageError={viewModel.state.errorDateExpire} 
                isPassword={false} 
                listenerChangeText={(text) => {
                    viewModel.onDataExpire(text)
                } }
                isVisible={viewModel.state.isVisibleFieldDateExpire}
            />

            <View style={{ flexDirection:'row', width: '100%', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                <ButtonDefault
                    text={'Anterior'}
                    width='50%'
                    isLoading={false}
                    isDisabled={viewModel.state.isDisabledButtonPrev}
                    clickListener={() => {
                        viewModel.onPrev()
                    }} 
                />
                <View style={{width: 8}} />
                <ButtonDefault
                    text={'Próximo'}
                    width='50%'
                    isLoading={viewModel.state.isLoading}
                    isDisabled={viewModel.state.isDisabledButtonNext}
                    clickListener={() => {
                        viewModel.onNext()
                    }} 
                />
            </View>
            </View>
        </SafeAreaView>
    );
}

export default CreditCardFormScreen;