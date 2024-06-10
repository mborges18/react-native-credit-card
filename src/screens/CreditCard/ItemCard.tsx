import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CreditCardListModel from "./model/CreditCardListModel";
import IconElo from "../../assets/images/ic_elo.svg";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../utils/AppTheme';

type CreditCardItemProps = {
    item: CreditCardListModel
}

export default function Itemcard(card: CreditCardItemProps) {
    const [heightState, setHeightState] = useState(70);
    const ThemeApp = Theme()
    const style = styles()

    return (

        <Pressable style={{}} onPress={() => {
            var height = heightState == 70 ? 260 : 70
            setHeightState(height)
        }}>
        <View style={{height: heightState}}>
        <LinearGradient style={style.card}
        useAngle={true} angle={75} angleCenter={{x:0.3,y:0.5}}
         colors={[card.item.styleCard.colorLight, card.item.styleCard.colorDark]} >
  
            <View style={style.topHeader}>
                <Text style={style.text18}>{card.item?.flag}</Text>
                <IconElo fill='#000' width={50} height={40} />
            </View>

            <View style={style.middleHeader}>
                <Text style={style.text18}>{card.item?.number.split(" ")[0]}</Text>
                <Text style={style.text18}>{card.item?.number.split(" ")[1]}</Text>
                <Text style={style.text18}>{card.item?.number.split(" ")[2]}</Text>
                <Text style={style.text18}>{card.item?.number.split(" ")[3]}</Text>
            </View>

            <View style={{marginTop: 20}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between', }}>
                <Text style={style.text18}>Nome</Text>
                <Text style={style.text18}>Validade</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'space-between', }}>
                <Text style={style.text18}>{card.item?.nameUser}</Text>
                <Text style={style.text18}>{card.item?.dateExpire}</Text>
            </View>
            </View>
        </LinearGradient>
        <View style={style.bottomHeader}>
        <TouchableOpacity activeOpacity={0.8} style={style.buttonAction}>
            <Icon name={'delete'} size={22} color={ThemeApp.colors.onText} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={style.buttonAction}>
            <Icon name={'edit'} size={22} color={ThemeApp.colors.onText} />
        </TouchableOpacity>
        </View>
        </View>
        </Pressable>
    );
  }

  const styles = () => { 
    const ThemeApp = Theme()
    return StyleSheet.create({

    shadowContainer: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 3, width: 3 }, // IOS
        shadowOpacity: 3, // IOS
        shadowRadius: 3, //IOS
        elevation: 5, // Android
    },
    card: { 
        padding: 16, 
        marginStart: 16, 
        marginEnd: 16, 
        marginBottom: 8, 
        borderRadius: 8
    },
    topHeader: {
        flexDirection:'row', 
        justifyContent: 'space-between', 
        marginTop: 8
    },
    middleHeader: {
        marginTop: 30, 
        flexDirection:'row', 
        justifyContent: 'space-evenly'
    },
    bottomHeader: {
        flexDirection:'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    },
    text18: {
        color: ThemeApp.colors.onText, 
        fontSize: 18, 
        fontWeight: 'bold', 
    },
    text16: {
        color: ThemeApp.colors.onText, 
        fontSize: 16, 
        fontWeight: 'bold'
    },
    buttonAction: {
        height: 40, 
        width: 40, 
        borderRadius: 100, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: ThemeApp.colors.primary
    }
  })
}