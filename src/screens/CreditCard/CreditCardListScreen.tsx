import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';
import CreditCardListViewModel from './CreditCardListViewModel';
import Theme from '../../utils/AppTheme';
import Itemcard from './ItemCard';

const CreditCardListScreen = () => {
  const viewModel = CreditCardListViewModel()
  const ThemeApp = Theme()

  useEffect(() => {
     viewModel.onGetData()
  },[])

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor={ ThemeApp.colors.primary } />
    <View style={{marginVertical: 16}}>
      
      <FlatList
        data={viewModel.state.listCards}
        renderItem={({item}) => <Itemcard item={item}  />}
      />
    </View>
   
    </SafeAreaView>
  );
};

export default CreditCardListScreen;
