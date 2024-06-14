import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Theme from 'utils/AppTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HeaderWellCome(props: HeaderWellComeProps) {

    return (
        <>
        <Text style={styles().title}>
            <Icon name={props.iconName} size={24} color={Theme().colors.text} /> {props.title}
        </Text>

        <Text style={styles().subTitle}>{props.subTitle}</Text>

        <Text style={styles().description}>
        {props.description}
        </Text>
        </>
    );
}

const styles = () => {
    const ThemeApp = Theme()

    return StyleSheet.create({
        title : {
            marginTop: 16, 
            textAlign:'center', 
            fontWeight:'bold', 
            fontSize: 26, 
            textTransform:'uppercase', 
            color: ThemeApp.colors.text
        },
        subTitle : {
            marginTop: 16, 
            fontWeight:'bold', 
            fontSize: 20, 
            color: ThemeApp.colors.text
        },
        description: {
            marginTop: 8, 
            fontWeight:'bold', 
            fontSize: 16, 
            color: ThemeApp.colors.text
        }
    });
}

type HeaderWellComeProps = {
    title: string,
    iconName: string,
    subTitle: string,
    description: string
}
