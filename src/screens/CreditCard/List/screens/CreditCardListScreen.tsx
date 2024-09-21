import React, { useEffect } from 'react';
import useCreditCardList from 'screens/CreditCard/List/hooks/useCreditCardList';
import Theme from 'utils/AppTheme';
import Itemcard from 'screens/CreditCard/List/screens/ItemCard';
import { useNavigation, ParamListBase,  NavigationProp, useRoute, RouteProp } from '@react-navigation/native';
import { NavigationUrl } from 'navigation/NavigationUrl';
import DialogConfirm from 'components/Dialog/DialogConfirm';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogApp from 'utils/LogApp';
import StatusBarApp from 'components/StatusBar/StatusBar';
import * as S from "./styles"

const CreditCardListScreen = () => {

const {
  state,
  onGetData,
  onDeleteData,
  onDeleteDataConfirm,
  onDeleteDataCancel,
  onDataCreated
} = useCreditCardList()

const ThemeApp = Theme()
const navigation: NavigationProp<ParamListBase> = useNavigation();
const route = useRoute<RouteProp<ParamListBase>>();

useEffect(() => {
  LogApp("onDataCreated")
  onDataCreated(route.params as Object) 
}, [route.params])

useEffect(() => {
  LogApp("onGetData")
  onGetData()
}, [])

return (
  <S.SafeAreaView>
  <StatusBarApp />

      <DialogConfirm 
        isVisible={state.confirmDelete} 
        title={'Informação'} 
        description={'Você quer realmente excluir esse item?'} 
        onClickConfirm={() => { onDeleteDataConfirm() }} 
        onClickCancel={() => { onDeleteDataCancel() } } 
      />
      <S.ListCards
        data={state.listCards}
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
          delete={() => {
              onDeleteData(item);
          } }
          edit={() => {
              navigation.navigate(NavigationUrl.CreditCardFormScreen, item);
          } } 
          />}
      />
 
    <S.FloatButton 
      activeOpacity={0.8} 
      onPress={() => {
          navigation.navigate(NavigationUrl.CreditCardFormScreen);
      }}>
      <Icon name={'add'} size={24} color={ThemeApp.colors.onText} />
    </S.FloatButton>
  </S.SafeAreaView>
);
};

export default CreditCardListScreen;



