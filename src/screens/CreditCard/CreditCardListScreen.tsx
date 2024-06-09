import React, { useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreditCardListViewModel from './CreditCardListViewModel';
import CreditCardListModel from './model/CreditCardListModel';
import Theme from '../../utils/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconElo from "../../assets/images/ic_elo.svg";
import LinearGradient from 'react-native-linear-gradient';


type CreditCardItemProps = {
    item: CreditCardListModel
}

const CreditCardListScreen = () => {
  const viewModel = CreditCardListViewModel()
  const ThemeApp = Theme()

  useEffect(() => {
     viewModel.onGetData()
  },[])


  function Itemcard(card: CreditCardItemProps) {
    return (
        <LinearGradient
        useAngle={true} angle={75} angleCenter={{x:0.3,y:0.5}}
         colors={[card.item.styleCard.colorLight, card.item.styleCard.colorDark]} style={{ height: 200, padding: 16, marginStart: 16, marginEnd: 16, marginBottom: 8, borderRadius: 8}}>
  
            <View style={{flexDirection:'row', justifyContent: 'space-between', }}>
                 <Text style={{color:'#ffffff', fontSize: 18, fontWeight: 'bold'}}>{card.item?.flag}</Text>
                 <IconElo fill='#000' width={50} height={40} />
            </View>

            <View style={{marginTop: 35, flexDirection:'row', justifyContent: 'space-evenly', }}>
                 <Text style={{color:'#ffffff', fontSize: 18, fontWeight: 'bold',}}>{card.item?.number.split(" ")[0]}</Text>
                 <Text style={{color:'#ffffff', fontSize: 18, fontWeight: 'bold',}}>{card.item?.number.split(" ")[1]}</Text>
                 <Text style={{color:'#ffffff', fontSize: 18, fontWeight: 'bold',}}>{card.item?.number.split(" ")[2]}</Text>
                 <Text style={{color:'#ffffff', fontSize: 18, fontWeight: 'bold',}}>{card.item?.number.split(" ")[3]}</Text>
            </View>

            <View style={{marginTop: 20}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between', }}>
                 <Text style={{color:'#ffffff', fontSize: 16, fontWeight: 'bold'}}>Nome</Text>
                 <Text style={{color:'#ffffff', fontSize: 16, fontWeight: 'bold'}}>Validade</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'space-between', }}>
                 <Text style={{color:'#ffffff', fontSize: 16, fontWeight: 'bold'}}>{card.item?.nameUser}</Text>
                 <Text style={{color:'#ffffff', fontSize: 16, fontWeight: 'bold'}}>{card.item?.dateExpire}</Text>
            </View>
            </View>
            
        </LinearGradient>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor={ ThemeApp.colors.primary } />
    <View>
      
      <FlatList
        data={viewModel.state.listCards}
        renderItem={({item}) => <Itemcard item={item}  />}
      />
    </View>
   
    </SafeAreaView>
  );
};

export default CreditCardListScreen;
