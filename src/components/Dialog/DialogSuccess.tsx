import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme, { colorSuccess } from 'utils/AppTheme';
import ButtonDefault from 'components/button/ButtonDefault';
import ModalDefault from 'components/dialog/ModalDefault';
import  { styles }  from 'components/dialog/styles';

export default function DialogSuccess(props: DialogSuccessProps) {
    return (
    <ModalDefault dialog={<>
            <View style={[styles().header, {backgroundColor: colorSuccess}]}>
                <Icon name='check-circle-outline' size={48} color={Theme().colors.background} />
            </View>
            <View style={styles().container}>
                <Text style={styles().title}>{props.title}</Text>
                <Text style={styles().description}>{props.description}</Text>
                <ButtonDefault
                    text={'Ok'}
                    isLoading={false}
                    isDisabled={false}
                    colorContainer={colorSuccess}
                    clickListener={
                        () => { props.onClickOk() }
                    } 
                />
            </View>
        </>} isVisible={props.isVisible} />
    );
}

type DialogSuccessProps = {
    isVisible: boolean,
    title: string,
    description: string,
    onClickOk : () => void
}
