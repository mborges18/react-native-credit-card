import React from 'react';
import {View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Theme, { colorInfo } from '../../utils/AppTheme';
import ButtonDefault from '../Button/ButtonDefault';
import ModalDefault from './ModalDefault';
import { styles } from './styles';

export default function DialogConfirm(props: DialogConfirmProps) {

    return (
    <ModalDefault dialog={<>
            <View style={[styles().header, {backgroundColor: colorInfo}]}>
                <Icon name='questioncircleo' size={38} color={Theme().colors.background} />
            </View>
            <View style={styles().container}>
                <Text style={styles().title}>{props.title}</Text>
                <Text style={styles().subTitle}>{props.description}</Text>
                <View style={{flexDirection:'row', width: '50%', justifyContent: 'center', alignItems:'center'}}>
                <ButtonDefault
                    text={'Cancelar'}
                    isLoading={false}
                    isDisabled={false}
                    colorContainer={colorInfo}
                    clickListener={
                        () => { props.onClickCancel() }
                    } 
                />
                <View style={{width: 8}} />
                <ButtonDefault
                    text={'Confirmar'}
                    isLoading={false}
                    isDisabled={false}
                    colorContainer={Theme().colors.background}
                    colorText={Theme().colors.onBackground}
                    clickListener={
                        () => { props.onClickConfirm() }
                    } 
                />
                </View>
            </View>
        </>} isVisible={props.isVisible} />
    );
}

type DialogConfirmProps = {
    isVisible: boolean,
    title: string,
    description: string,
    onClickConfirm : () => void,
    onClickCancel : () => void
}

