import { Text, Animated, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Theme from '../../utils/AppTheme';

export default function ButtonDefault(
    props: ButtonDefaultProps
) {
    const HandlerLoading = () => {
        return(
            props.isLoading
            ? <ActivityIndicator size="small" color={ Theme().colors.primary } /> 
            : <Text style={ props.isOutline ? styles().textOutline : styles().text } >{ props.text }</Text>
        );
    }

    return(
        <TouchableOpacity 
            style={[props.isOutline ? styles().buttonOutline : styles().button, 
                { backgroundColor: props.isDisabled && !props.isOutline ? Theme().colors.onSurfaceVariant : Theme().colors.primary} ]} 
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
        button: { 
            marginTop: 24,
            width: '100%', 
            height: 55,
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: ThemeApp.colors.primary
        },
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
        text: { 
            textAlign: 'center', 
            color: ThemeApp.colors.onPrimary,
            fontWeight: 'bold',
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

type ButtonDefaultProps = {
    text: string,
    isLoading: boolean,
    isDisabled: boolean,
    isOutline: boolean,
    clickListener: (() => void);
}
