import { StyleSheet } from "react-native"
import Theme from 'utils/AppTheme';

export const styles = () => {
    const theme = Theme()
    return StyleSheet.create({
        header: {
            borderTopStartRadius: 8, 
            borderTopEndRadius: 8, 
            justifyContent:'center', 
            alignItems:'center', 
            height: 70
        },
        container: {
            padding: 16, 
            justifyContent:'center', 
            alignItems:'center',
            borderBottomStartRadius: 8,
            borderBottomEndRadius: 8,
            backgroundColor: theme.colors.surface
        },
        title: {
            fontSize: 22, 
            fontWeight:'bold', 
            color: theme.colors.text
        },
        description: {
            marginTop: 16, 
            fontSize: 15, 
            textAlign: 'center',
            color: theme.colors.text
        },
    })
}