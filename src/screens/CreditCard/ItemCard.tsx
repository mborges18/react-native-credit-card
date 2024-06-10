import React, { useState } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CreditCardListModel from "./model/CreditCardListModel";
import IconElo from "../../assets/images/ic_elo.svg";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../utils/AppTheme';

type CreditCardItemProps = {
    item: CreditCardListModel
}

export default function Itemcard(card: CreditCardItemProps) {
    const [heightAnimation, setHeightAnimation] = useState(new Animated.Value(60));
    const [isOpentState, setIsOpentState] = useState(false);
    const ThemeApp = Theme()
    const style = styles()

    const showContent = () => {
      setIsOpentState(!isOpentState)

      Animated.timing(heightAnimation, {
        toValue: isOpentState ? 60 : 205,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false 
      }).start();
    };

    const IconCard = (): JSX.Element => {
        return card.item.styleCard.icon
    }

    return (
        <Pressable style={{backgroundColor: ThemeApp.colors.background}} onPress={() => {
            showContent()
        }}>

        <Animated.View style={[{ height: heightAnimation, marginTop: 3}]}>
        <LinearGradient style={[style.card, {
            borderBottomLeftRadius: isOpentState ? 8 : 0,
            borderBottomRightRadius: isOpentState ? 8 : 0,
        }]} 
        useAngle={true} angle={75} angleCenter={{x:0.3,y:0.5}}
         colors={[card.item.styleCard.colorLight, card.item.styleCard.colorDark]} >
  
            <View style={style.topHeader}>
                <Text style={[style.text18, {marginTop: 8}]}>{card.item?.flag}</Text>
                <IconCard />
            </View>

            { isOpentState ? (
            <>
                <View style={style.middleHeader}>
                <Text style={[style.text18, { letterSpacing: 2}]}>{card.item?.number.split(" ")[0]}</Text>
                <Text style={[style.text18, { letterSpacing: 2}]}>{card.item?.number.split(" ")[1]}</Text>
                <Text style={[style.text18, { letterSpacing: 2}]}>{card.item?.number.split(" ")[2]}</Text>
                <Text style={[style.text18, { letterSpacing: 2}]}>{card.item?.number.split(" ")[3]}</Text>
                </View>

                <View style={{marginTop: 20}}>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={style.text16}>Nome</Text>
                    <Text style={style.text16}>Validade</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={style.text18}>{card.item?.nameUser}</Text>
                    <Text style={style.text18}>{card.item?.dateExpire}</Text>
                </View>
                </View>
            </>
            ) : null}

        </LinearGradient>
        </Animated.View>

        { isOpentState ? (
            <View style={style.bottomActions}>
            <TouchableOpacity activeOpacity={0.8} style={style.buttonAction}>
                <Icon name={'delete'} size={22} color={ThemeApp.colors.onText} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={style.buttonAction}>
                <Icon name={'edit'} size={22} color={ThemeApp.colors.onText} />
            </TouchableOpacity>
            </View>
        ) : null }

        </Pressable>
    );
  }

  const styles = () => { 
    const ThemeApp = Theme()
    return StyleSheet.create({
    card: { 
        padding: 16, 
        marginStart: 16, 
        marginEnd: 16, 
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    topHeader: {
        flexDirection:'row', 
        justifyContent: 'space-between', 
    },
    middleHeader: {
        marginTop: 30, 
        flexDirection:'row', 
        justifyContent: 'space-evenly',
    },
    bottomActions: {
        flexDirection:'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        marginVertical: 8
    },
    text18: {
        color: ThemeApp.colors.onText, 
        fontSize: 18, 
        fontWeight: 'bold',
        textShadowColor:  ThemeApp.colors.onBackground,
        textShadowOffset: { height: 1, width: 1 },
        textShadowRadius: 1
    },
    text16: {
        color: ThemeApp.colors.onText, 
        fontSize: 16, 
        fontWeight: 'bold',
        textShadowColor:  ThemeApp.colors.onBackground,
        textShadowOffset: { height: 1, width: 1 },
        textShadowRadius: 1
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