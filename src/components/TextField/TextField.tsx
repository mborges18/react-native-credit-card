import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from "./styles";
import { TextFieldProps } from 'components/textfield/TextFieldProps';
import { useTextField } from './useTextField';

const TextField = (props: TextFieldProps) => {
  const textFieldHook = useTextField(props);

  return (
  <>{props.isVisible ? 
    <S.Wrapper>
      <S.InputText
        style={[{borderColor: textFieldHook.helperBorderColor(props)}]}
        onBlur={textFieldHook.handlerBlurInput}
        onFocus={textFieldHook.handlerFocusInput}
        onChangeText={textFieldHook.handlerMaskType}
        value={textFieldHook.digit}
        placeholder={textFieldHook.handlerPlaceHolder()}
        inputMode={props.inputMode}
        secureTextEntry={textFieldHook.handlerSecretPassword()}
        maxLength={props.maxLength}
      />

      <S.IconWrapper>
        <Icon 
          name={props.iconStart} 
          size={22} 
          color={textFieldHook.handlerColorLabel()} 
        />
      </S.IconWrapper>

      {props.isPassword &&
        <S.IconButton 
          activeOpacity={.7} 
          onPress={textFieldHook.handlerEyeToggle}> 
          <Icon 
            name={textFieldHook.handlerIconEyeToggle()} 
            size={22} 
            color={textFieldHook.handlerColorLabel()}
          />
        </S.IconButton>
      }

      <S.LabelAnimate 
        style={textFieldHook.animatedStyles.animeLabel}  
        zIndex={textFieldHook.zindex} 
        colorText={textFieldHook.handlerColorLabel()}>
        {props.label}
      </S.LabelAnimate>

      {textFieldHook.handlerMessageError() && 
      <Text style={{color: props.colorBorderError}}>{props.messageError}</Text>}
    
    </S.Wrapper>
  : null}
    </>
  );
}

export default TextField;
