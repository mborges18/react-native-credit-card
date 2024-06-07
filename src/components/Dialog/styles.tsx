import { StyleSheet } from "react-native"
import Theme from '../../utils/AppTheme';

export const styles = () => {
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
            backgroundColor: Theme().colors.surface
        },
        title: {
            fontSize: 22, 
            fontWeight:'bold', 
            color: Theme().colors.text
        },
        subTitle: {
            marginTop: 16, 
            fontSize: 15, 
            color: Theme().colors.text
        },
    })
}