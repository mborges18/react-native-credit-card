import { Text, Animated, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Theme from '../../utils/AppTheme';

export default function ButtonDefault(
    props: ButtonDefaultProps
) {
    const HandlerLoading = () => {
        return(
            props.isLoading
            ? <ActivityIndicator size="large" color={ Theme().colors.onPrimary } /> 
            : <Text style={[ styles().text, { color: props.colorText !=null ? props.colorText  : Theme().colors.onPrimary } ]} >{ props.text }</Text>
        );
    }

    return(
        <TouchableOpacity 
            style={[styles().button, 
                { backgroundColor: 
                    props.isDisabled 
                    ? Theme().colors.onSurfaceVariant 
                    : props.colorContainer == null
                    ? Theme().colors.primary
                    : props.colorContainer

                } ]} 
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
            backgroundColor: ThemeApp.colors.primary,
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
        },
        text: { 
            textAlign: 'center', 
            color: ThemeApp.colors.onPrimary,
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
    colorContainer?: string,
    colorText?: string,
    clickListener: (() => void);
}
