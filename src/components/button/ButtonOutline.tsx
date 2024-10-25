import { ActivityIndicator } from 'react-native';
import { ThemeDefaultApp } from 'utils/AppTheme';
import * as S from "./styles";

type ButtonOutlineProps = {
  text: string,
  isLoading: boolean,
  isDisabled: boolean,
  clickListener: (() => void);
}

export default function ButtonOutline(
  props: ButtonOutlineProps
) {
  const HandlerLoading = () => {
    return(
      props.isLoading
      ? <ActivityIndicator size="large" color={ThemeDefaultApp.colors.onPrimary} /> 
      : <S.TextButtonOutline>{ props.text }</S.TextButtonOutline>
    );
  }

  return(
    <S.ButtonOutline 
      disabled={props.isDisabled || props.isLoading}
      onPress={()=>{ props.clickListener() }}
      activeOpacity={.7}>
        <HandlerLoading />
    </S.ButtonOutline>
  );
}
