import React, { useState } from 'react'
import {View, Modal, StyleSheet } from 'react-native'
import Theme, { colorError } from '../../utils/AppTheme';

export default function ModalDefault(props:DialogProps) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={() => {
        }}>
            <View style={styles().modal}>
                <View style={styles().dialog}>
                {props.dialog}
                </View>
            </View>
        </Modal>
    );
}

type DialogProps = {
   isVisible: boolean,
   dialog: any
}

const styles = () => {
    const ThemeApp = Theme()
    return StyleSheet.create({
        modal: {
            flex:1, 
            justifyContent:'center', 
            alignItems:'center', 
            backgroundColor: '#00000087'
        },
        dialog: {
            backgroundColor: ThemeApp.colors.background, 
            borderRadius: 8, 
            width: '85%'
        },
        header: {
            backgroundColor: colorError, 
            borderTopStartRadius: 8, 
            borderTopEndRadius: 8, 
            justifyContent:'center', 
            alignItems:'center', 
            height: 70
        },
        container: {
            padding: 16, 
            justifyContent:'center', 
            alignItems:'center'
        },
        title: {
            fontSize: 18, 
            fontWeight:'bold', 
            color: ThemeApp.colors.text
        },
        subTitle: {
            marginTop: 16, 
            fontSize: 14, 
            color: '#000000'
        },
    })
}