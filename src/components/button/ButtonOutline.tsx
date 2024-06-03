import { Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Theme from '../../utils/AppTheme';

export default function ButtonOutline(
    props: ButtonOutlineProps
) {
    const HandlerLoading = () => {
        return(
            props.isLoading
            ? <ActivityIndicator size="large" color={ Theme().colors.onPrimary } /> 
            : <Text style={ styles().textOutline } >{ props.text }</Text>
        );
    }

    return(
        <TouchableOpacity 
            style={[styles().buttonOutline, 
                { borderColor: props.isDisabled ? Theme().colors.onSurfaceVariant : Theme().colors.primary} ]} 
            disabled={props.isDisabled || props.isLoading}
            onPress={()=>{ props.clickListener() }}
            activeOpacity={.7} >
                <HandlerLoading />
        </TouchableOpacity>
    );
}

const styles = () => {
    const ThemeApp = Theme()

    return StyleSheet.create({
        buttonOutline: {
            marginTop: 24,
            width: '100%', 
            height: 55,
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: ThemeApp.colors.primary
        },
        textOutline: { 
            textAlign: 'center', 
            color: ThemeApp.colors.primary,
            fontWeight: 'bold',
        },
        colorIndicator: {
            color: ThemeApp.colors.background 
        }
    })
}

type ButtonOutlineProps = {
    text: string,
    isLoading: boolean,
    isDisabled: boolean,
    clickListener: (() => void);
}
