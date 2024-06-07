import React from 'react';
import {View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme, { colorError } from '../../utils/AppTheme';
import ButtonDefault from '../Button/ButtonDefault';
import ModalDefault from './ModalDefault';
import { styles } from './styles';

export default function DialogError(props: DialogErrorProps) {

    return (
    <ModalDefault dialog={<>
            <View style={[styles().header, {backgroundColor: colorError}]}>
                <Icon name='alert-circle-outline' size={48} color={Theme().colors.background} />
            </View>
            <View style={styles().container}>
                <Text style={styles().title}>{props.title}</Text>
                <Text style={styles().subTitle}>{props.description}</Text>
                <ButtonDefault
                    text={'Ok'}
                    isLoading={false}
                    isDisabled={false}
                    colorContainer={colorError}
                    clickListener={
                        () => { props.onClickOk() }
                    } 
                />
            </View>
        </>} isVisible={props.isVisible} />
    );
}

type DialogErrorProps = {
    isVisible: boolean,
    title: string,
    description: string,
    onClickOk : () => void
}
