import { Text, Animated, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Theme from '../../utils/AppTheme';

export default function ButtonDefault(
    props: ButtonDefaultProps
) {

    const HandlerLoading = () => {
        return(
            props.isLoading
            ? <ActivityIndicator size="small" color={ Theme().colors.primary } /> 
            : <Text style={ styles().text }>{ props.text }</Text>
        );
    }

    return(
        <TouchableOpacity 
            style={ styles().button } 
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
            marginTop: 32,
            width: '100%', 
            height: 55,
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: ThemeApp.colors.primary
        },
        text: { 
            textAlign: 'center', 
            color: ThemeApp.colors.onPrimary,
        },
        colorIndicator: {
            color: ThemeApp.colors.background 
        }
    })
}

type ButtonDefaultProps = {
    text: string,
    isLoading: boolean,
    clickListener: (() => void);
}
