import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';
import CreditCardListViewModel from './CreditCardListViewModel';
import Theme from '../../../utils/AppTheme';
import Itemcard from './ItemCard';
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { NavigationUrl } from '../../../navigation/NavigationUrl';
import DialogConfirm from '../../../components/Dialog/DialogConfirm';

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
                <FlatList
                    data={viewModel.state.listCards}
                    renderItem={({item}) => <Itemcard item={item} delete={(item) => {
                        viewModel.onDeleteData(item)
                    } } 
                    edit={(item) => {
                        navigation.navigate(NavigationUrl.CreditCardFormScreen, item)
                    } }  />}
                />
            </View>
        </SafeAreaView>
        
    );
};

export default CreditCardListScreen;
