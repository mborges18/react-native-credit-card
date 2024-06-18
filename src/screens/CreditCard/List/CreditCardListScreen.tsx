import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CreditCardListViewModel from 'screens/creditcard/list/CreditCardListViewModel';
import Theme from 'utils/AppTheme';
import Itemcard from 'screens/creditcard/list/ItemCard';
import { useNavigation, ParamListBase,  NavigationProp, useRoute, RouteProp } from '@react-navigation/native';
import { NavigationUrl } from 'navigation/NavigationUrl';
import DialogConfirm from 'components/dialog/DialogConfirm';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreditCardListScreen = () => {
    const viewModel = CreditCardListViewModel()
    const ThemeApp = Theme()
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const route = useRoute<RouteProp<ParamListBase>>();
    
    useEffect(() => {
        if(route.params != undefined &&  route.params != null) {
            console.log("PEGANDO DADOS "+JSON.stringify(route.params))
            viewModel.onDataCreated(route.params as Object)
        } else {
            viewModel.onGetData()
        }
    }, [route.params])

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={ ThemeApp.colors.primary } />
            <View style={{marginVertical: 16}}>
                <DialogConfirm 
                    isVisible={viewModel.state.confirmDelete} 
                    title={'Informação'} 
                    description={'Você quer realmente excluir esse item?'} 
                    onClickConfirm={() => { viewModel.onDeleteDataConfirm() }} 
                    onClickCancel={() => { viewModel.onDeleteDataCancel() } } 
                />
                <FlatList style={{
                    marginStart: 16, 
                    marginEnd: 16, 
                }}
                    data={viewModel.state.listCards}
                    renderItem={({item}) => 
                    <Itemcard 
                        number={item.number}
                        name={item.nameUser}
                        date={item.dateExpire} 
                        cvv={''}
                        isFront={true}
                        isClickable={true} 
                        isFlipable={false}
                        creditCardType={item.styleCard}
                        delete={(item) => {
                            viewModel.onDeleteData(item);
                        } }
                        edit={(item) => {
                            navigation.navigate(NavigationUrl.CreditCardFormScreen);
                        } } 
                        />}
                />
            </View>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={[styles.floatButton, {backgroundColor: ThemeApp.colors.primary}]} 
                onPress={() => {
                    navigation.navigate(NavigationUrl.CreditCardFormScreen);
                }}>
                <Icon name={'add'} size={24} color={ThemeApp.colors.onText} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CreditCardListScreen;

const styles = StyleSheet.create({
    floatButton: { 
        position: 'absolute', 
        bottom: 16, 
        right: 16, 
        zIndex: 10, 
        padding: 16, 
        elevation: 5, 
        borderRadius: 16, 
    }
})


