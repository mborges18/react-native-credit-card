import React, { useEffect } from 'react';
import {
View,
FlatList,
SafeAreaView,
TouchableOpacity,
StyleSheet,
} from 'react-native';
import useCreditCardList from 'screens/creditcard/list/hooks/useCreditCardList';
import Theme from 'utils/AppTheme';
import Itemcard from 'screens/creditcard/list/screens/ItemCard';
import { useNavigation, ParamListBase,  NavigationProp, useRoute, RouteProp } from '@react-navigation/native';
import { NavigationUrl } from 'navigation/NavigationUrl';
import DialogConfirm from 'components/dialog/DialogConfirm';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogApp from 'utils/LogApp';
import StatusBarApp from 'components/statusbar/StatusBar';
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
    <S.Wrapper>
      <DialogConfirm 
        isVisible={state.confirmDelete} 
        title={'Informação'} 
        description={'Você quer realmente excluir esse item?'} 
        onClickConfirm={() => { onDeleteDataConfirm() }} 
        onClickCancel={() => { onDeleteDataCancel() } } 
      />
      <FlatList style={{marginStart: 16, marginEnd: 16}}
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
    </S.Wrapper>
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



