import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';
import CreditCardListViewModel from 'screens/creditcard/list/CreditCardListViewModel';
import Theme from 'utils/AppTheme';
import Itemcard from 'screens/creditcard/list/ItemCard';
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { NavigationUrl } from 'navigation/NavigationUrl';
import DialogConfirm from 'components/dialog/DialogConfirm';

const CreditCardListScreen = () => {
    const viewModel = CreditCardListViewModel()
    const ThemeApp = Theme()
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    useEffect(() => {
        viewModel.onGetData()
    },[])

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
        </SafeAreaView>
        
    );
};

export default CreditCardListScreen;
