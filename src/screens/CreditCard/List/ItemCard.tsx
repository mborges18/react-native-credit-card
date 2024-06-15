import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialIcons';
import CreditCardListModel from "screens/creditcard/list/model/CreditCardListModel";
import Theme from 'utils/AppTheme';

type CreditCardItemProps = {
    item: CreditCardListModel,
    isClickable?: boolean,
    isOpen?: boolean,
    isFront?: boolean,
    isFlipable?: boolean,
    delete?: (item: CreditCardListModel) => void,
    edit?: (item: CreditCardListModel) => void,
}

export default function Itemcard(props: CreditCardItemProps) {
    const [heightAnimation, setHeightAnimation] = useState(new Animated.Value(60));
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
     }, [props.isFront]);

    const IconCard = (): JSX.Element => {
        return props.item.styleCard.icon
    }

    const DataFront = () => {
        if(isFront) {
            return (
                <Animated.View>
                <View style={style.topHeader}>
                    <Text style={[style.text18, {marginTop: 8}]}>{props.item?.flag}</Text>
                    <IconCard />
                </View>

                { isOpentState ? (
                <>
                    <View style={style.middleHeader}>
                    <Text style={[style.text18, { letterSpacing: 2}]}>{props.item?.number.split(" ")[0]}</Text>
                    <Text style={[style.text18, { letterSpacing: 2}]}>{props.item?.number.split(" ")[1]}</Text>
                    <Text style={[style.text18, { letterSpacing: 2}]}>{props.item?.number.split(" ")[2]}</Text>
                    <Text style={[style.text18, { letterSpacing: 2}]}>{props.item?.number.split(" ")[3]}</Text>
                    </View>

                    <View style={{marginTop: 20}}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={style.text16}>Nome</Text>
                        <Text style={style.text16}>Validade</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={style.text16}>{props.item?.nameUser}</Text>
                        <Text style={style.text16}>{props.item?.dateExpire}</Text>
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
                    <View style={{width: '100%', height: 50, backgroundColor: '#000'}}></View>
                    <View style={{ justifyContent: 'center',marginTop: 20, width: '100%', height: 50, backgroundColor: '#FFF'}}>
                        <Animated.Text style={{
                            transform: [
                                { rotateY:  '180deg' },
                            ],
                            textAlign:'right',
                            marginLeft: 16
                        }}>{props.item.cvv}</Animated.Text>
                    </View>
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

        <LinearGradient style={[style.card, {
            borderBottomLeftRadius: isOpentState ? 8 : 0,
            borderBottomRightRadius: isOpentState ? 8 : 0,
        }]} 
        useAngle={true} angle={75} angleCenter={{x:0.3,y:0.5}}
        colors={[props.item.styleCard.colorLight, props.item.styleCard.colorDark]}>
  
        <DataFront />
        <DataBack />

        </LinearGradient>

        </Animated.View>

        { isOpentState && props.isClickable && !props.isFlipable ? (
            <View style={style.bottomActions}>
                <TouchableOpacity 
                    onPress={() => { props.delete?.(props.item) }} 
                    activeOpacity={0.8} 
                    style={style.buttonAction}>
                    <Icon name={'delete'} size={24} color={ThemeApp.colors.onText} />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => { props.edit?.(props.item) }} 
                    activeOpacity={0.8} 
                    style={style.buttonAction}>
                    <Icon name={'edit'} size={24} color={ThemeApp.colors.onText} />
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
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 210,
        width: '100%'
    },
    topHeader: {
        flexDirection:'row', 
        justifyContent: 'space-between', 
    },
    middleHeader: {
        marginTop: 35, 
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
        height: 45, 
        width: 45, 
        borderRadius: 100, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: ThemeApp.colors.primary
    }
  })
}