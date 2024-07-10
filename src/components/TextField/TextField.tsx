import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from "./styles";
import { TextFieldProps } from 'components/textfield/TextFieldProps';
import { useTextField } from './useTextField';
import Theme from 'utils/AppTheme';

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeHolder,
  value,
  inputMode,
  maxLength=55,
  messageError,
  colorBorderEnabled=Theme().colors.primary,
  colorBorderDisabled=Theme().colors.border,
  colorBorderError=Theme().colors.error,
  colorContent=Theme().colors.background,
  colorText=Theme().colors.text,
  maskType,
  iconStart,
  isPassword,
  isVisible,
  listenerChangeText
}) => {
  const textFieldHook = useTextField({
    value,
    placeHolder,
    maskType,
    colorBorderEnabled,
    colorBorderDisabled,
    colorBorderError,
    listenerChangeText
  } as TextFieldProps);

  return (
  <>{isVisible ? 
    <S.Wrapper colorContent={colorContent}>
      <S.InputText
        borderColor={textFieldHook.helperBorderColor()}
        onBlur={textFieldHook.handlerBlurInput}
        onFocus={textFieldHook.handlerFocusInput}
        onChangeText={textFieldHook.handlerMaskType}
        value={textFieldHook.digit}
        placeholder={textFieldHook.handlerPlaceHolder()}
        inputMode={inputMode}
        secureTextEntry={textFieldHook.handlerSecretPassword()}
        maxLength={maxLength}
        colorText={colorText}
      />

      <S.IconWrapper>
        <Icon 
          name={iconStart} 
          size={22} 
          color={textFieldHook.handlerColorLabel()} 
        />
      </S.IconWrapper>

      {isPassword &&
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
        {label}
      </S.LabelAnimate>

      {textFieldHook.handlerMessageError() && 
      <Text style={{color: colorBorderError}}>{messageError}</Text>}
    
    </S.Wrapper>
  : null}
    </>
  );
}

export default TextField;
