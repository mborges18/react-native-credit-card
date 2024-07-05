import { ActivityIndicator, DimensionValue } from 'react-native';
import Theme from 'utils/AppTheme';
import * as S from "./styles";
import React from 'react';

type ButtonDefaultProps = {
  text: string,
  width?: DimensionValue,
  isLoading: boolean,
  isDisabled: boolean,
  colorContainer?: string,
  colorText?: string,
  clickListener: (() => void);
}

export default function ButtonDefault(
  props: ButtonDefaultProps
) {
  const HandlerLoading = () => {
    return(
      props.isLoading
      ? <ActivityIndicator size="large" color={ Theme().colors.onPrimary } /> 
      : <S.TextButton>{ props.text }</S.TextButton>
    );
  }

  return(
    <S.Button  
      disabled={props.isDisabled || props.isLoading}
      onPress={()=>{ props.clickListener() }}
      activeOpacity={.7}>
        <HandlerLoading />
    </S.Button>
  );
}
