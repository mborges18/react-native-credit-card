import React, { useEffect} from "react";
import { Animated, Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CreditCardDefault } from "../model/StyleCard";
import * as S from "./styles"
import useItemCard from "../hooks/useItemCard";
import GradientCard from "components/CardGradient/GradientCard";
import { ThemeDefaultApp } from "utils/AppTheme";

export type CreditCardItemProps = {
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

  const {
    flip,
    showContent,
    isFront,
    isOpentState,
    styleRotate,
  } = useItemCard(props);

    useEffect(() => {
      flip()
    }, [props]);

  const DataFront = () => {
    if(isFront) {
      return (
        <Animated.View>
          <S.TopCard>
            <S.TextCard textSize={18} marginTop={8}>{props.creditCardType.name}</S.TextCard>
            {props.creditCardType.icon}
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
    <S.Pressable onPress={() => {
      props.isClickable && showContent()
    }}>

    <Animated.View style={styleRotate}>

      <S.CardOutter isOpen={props.isOpen} borderColor={props.creditCardType.colorDark}>
      <GradientCard angleX2={"0%"} fromColor={props.creditCardType.colorLight} toColor={props.creditCardType.colorDark} >

      <S.CardInner>
        <DataFront />
        <DataBack />
      </S.CardInner>

      </GradientCard>
      </S.CardOutter>

    </Animated.View>

    { isOpentState && props.isClickable && !props.isFlipable ? (
      <S.BottomCard>
        <S.ButtonAction 
          onPress={() => { props.delete?.() }} 
          activeOpacity={0.8}>
          <Icon name={'delete'} size={24} color={ThemeDefaultApp.colors.onText} />
        </S.ButtonAction>

        <S.ButtonAction 
          onPress={() => { props.edit?.() }} 
          activeOpacity={0.8}>
          <Icon name={'edit'} size={24} color={ThemeDefaultApp.colors.onText} />
        </S.ButtonAction>
      </S.BottomCard>
    ) : null }

    </S.Pressable>
);
}