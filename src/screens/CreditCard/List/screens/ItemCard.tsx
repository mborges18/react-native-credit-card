import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from 'utils/AppTheme';
import { CreditCardDefault } from "../model/StyleCard";
import * as S from "./styles"

type CreditCardItemProps = {
  number: string,
  name: string,
  date: string,
  cvv: string,
  creditCardType: CreditCardDefault,
  isClickable?: boolean,
  isOpen?: boolean,
  isFront?: boolean,
  isFlipable?: boolean,
  delete?: () => void,
  edit?: () => void,
}

export default function Itemcard(props: CreditCardItemProps) {
  const [heightAnimation] = useState(new Animated.Value(60));
  const [isOpentState, setIsOpentState] = useState(props.isOpen);

  const flipAnim = useRef(new Animated.Value(0)).current;
  const [isFront, setIsFront] = useState(true);

  const ThemeApp = Theme()
  const style = styles()

  const showContent = () => {
    setIsOpentState(!isOpentState)

    Animated.timing(heightAnimation, {
      toValue: isOpentState ? 60 : 210,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false 
    }).start();
  };

  const flip = () => {
    Animated.timing(flipAnim, {
        toValue: props.isFront ? 0 : 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false 
    }).start();

    setTimeout(() => {
        setIsFront(props.isFront ?? false)
    }, 250)
  };

  const rotateCard = flipAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
  });

    useEffect(() => {
      flip()
    }, [props]);

  const IconCard = () : JSX.Element => {
      return props.creditCardType.icon
  }

  const DataFront = () => {
    if(isFront) {
      return (
        <Animated.View>
          <S.TopCard>
            <S.TextCard textSize={18} marginTop={8}>{props.creditCardType.name}</S.TextCard>
            <IconCard />
          </S.TopCard>

          { isOpentState ? (
          <>
              <S.MiddleCard>
                <S.TextCard textSize={18} letterSpacing={2}>{props.number.split(" ")[0]}</S.TextCard>
                <S.TextCard textSize={18} letterSpacing={2}>{props.number.split(" ")[1]}</S.TextCard>
                <S.TextCard textSize={18} letterSpacing={2}>{props.number.split(" ")[2]}</S.TextCard>
                <S.TextCard textSize={18} letterSpacing={2}>{props.number.split(" ")[3]}</S.TextCard>
              </S.MiddleCard>

              <View style={{marginTop: 20}}>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <S.TextCard textSize={16}>Nome</S.TextCard> 
                <S.TextCard textSize={16}>Validade</S.TextCard>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <S.TextCard textSize={16}>{props.name}</S.TextCard>
                <S.TextCard textSize={16}>{props.date}</S.TextCard>
                </View>
              </View>
          </>
          ) : null}
      </Animated.View>
      )
    }
  }

  const DataBack = () => {
    if(!isFront){
      return(
        <Animated.View>
          <S.CardBlackTrace />
          <S.CardWhiteTrace>
            <Animated.Text style={{
                transform: [
                    { rotateY:  '180deg' },
                ],
                textAlign:'right',
                marginLeft: 16
            }}>{props.cvv}
            </Animated.Text>
          </S.CardWhiteTrace>
        </Animated.View >
      )
    }
  }

  return (
    <Pressable style={{ width: "100%", backgroundColor: ThemeApp.colors.background}} onPress={() => {
      if(props.isClickable) {
          showContent()
      }
    }}>

    <Animated.View style={{
        transform: [
            {rotateY:  rotateCard},
        ],
        height: heightAnimation, 
        marginTop: 3,
        }}>

    <LinearGradient
    useAngle={true} angle={75} angleCenter={{x:0.3,y:0.5}}
    colors={[props.creditCardType.colorLight, props.creditCardType.colorDark]}>
      <S.Card isOpen>
        <DataFront />
        <DataBack />
      </S.Card>
    </LinearGradient>

    </Animated.View>

    { isOpentState && props.isClickable && !props.isFlipable ? (
      <S.BottomCard>
        <TouchableOpacity 
          onPress={() => { props.delete?.() }} 
          activeOpacity={0.8} 
          style={style.buttonAction}>
          <Icon name={'delete'} size={24} color={ThemeApp.colors.onText} />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => { props.edit?.() }} 
          activeOpacity={0.8} 
          style={style.buttonAction}>
          <Icon name={'edit'} size={24} color={ThemeApp.colors.onText} />
        </TouchableOpacity>
      </S.BottomCard>
    ) : null }

    </Pressable>
);
}

const styles = () => { 
  const ThemeApp = Theme()
  return StyleSheet.create({

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
      height: 45, 
      width: 45, 
      borderRadius: 100, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: ThemeApp.colors.primary
  }
})
}