import { ActivityIndicator } from 'react-native';
import { ThemeDefaultApp } from 'utils/AppTheme';
import * as S from "./styles";
import React from 'react';

type ButtonDefaultProps = {
  text: string,
  width?: number,
  isLoading: boolean,
  isDisabled: boolean,
  colorContainer?: string,
  colorText?: string,
  clickListener: (() => void);
}

const ButtonDefault = (props: ButtonDefaultProps) => {
  const HandlerLoading = () => {
    return(
      props.isLoading
      ? <ActivityIndicator size="large" color={ThemeDefaultApp.colors.onPrimary } /> 
      : <S.TextButton colorText={props.colorText}>{ props.text }</S.TextButton>
    );
  }

  return(
    <S.Button 
      width={props.width}
      disabled={props.isDisabled || props.isLoading}
      onPress={()=>{ props.clickListener() }}
      colorContainer={props.colorContainer}
      activeOpacity={.7}>
        <HandlerLoading />
    </S.Button>
  );
}

export default ButtonDefault;
