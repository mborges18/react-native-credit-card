import React from 'react';
import useCreditCardList from 'screens/CreditCard/List/hooks/useCreditCardList';
import { ThemeDefaultApp } from 'utils/AppTheme';
import Itemcard from 'screens/CreditCard/List/screens/ItemCard';
import DialogConfirm from 'components/Dialog/DialogConfirm';
import { Plus } from 'phosphor-react-native';
import StatusBarApp from 'components/StatusBar/StatusBar';
import * as S from "./styles"
import { getFlagCard } from '../model/StyleCard';
import Toolbar from 'components/Toolbar/Toolbar';

const CreditCardListScreen: React.FC = () => {

const {
  state,
  onDeleteData,
  onDeleteDataConfirm,
  onDeleteDataCancel,
  gotoForm,
} = useCreditCardList()

return (
  <S.Wrapper>
      <DialogConfirm 
        isVisible={state.confirmDelete} 
        title={'Informação'} 
        description={'Você quer realmente excluir esse item?'} 
        onClickConfirm={() => { onDeleteDataConfirm() }} 
        onClickCancel={() => { onDeleteDataCancel() } } 
      />
      <Toolbar />
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
          creditCardType={getFlagCard(item.flag)}
          delete={() => {
              onDeleteData(item);
          } }
          edit={() => {
            gotoForm(item);
          } } 
          />}
      />
 
    <S.FloatButton 
      activeOpacity={0.8} 
      onPress={() => {
        gotoForm();
      }}>
      <Plus size={24} weight='bold' color={ThemeDefaultApp.colors.onText} />
    </S.FloatButton>
  </S.Wrapper>
);
};

export default CreditCardListScreen;



