import styled from 'styled-components/native';
import { ThemeDefaultApp } from 'utils/AppTheme';

type ButtonDefaultStylesProps = {
  width?: number,
  colorText?: string;
  colorContainer?: string;
  isDisabled?: boolean
}

const handlerColor = (props: ButtonDefaultStylesProps) => {
  var color = ThemeDefaultApp.colors.primary
  if(props.colorContainer!=null) {
    if(props.isDisabled) {
      color = ThemeDefaultApp.colors.onSurfaceVariant
    } else {
      color = props.colorContainer
    }
  } else {
    if(props.isDisabled) {
      color = ThemeDefaultApp.colors.onSurfaceVariant
    } else {
      color = ThemeDefaultApp.colors.primary
    }
  }
  return color;
}

export const Button = styled.TouchableOpacity<ButtonDefaultStylesProps>`
  margin-top: 24px;
  height: 55px;
  justify-content: center;
  border-radius: 8px;
  width: ${({ width }) => width ?? 100}%;
  background-color: ${(props) => handlerColor(props) };
`;

export const TextButton = styled.Text<ButtonDefaultStylesProps>`
  text-align: center; 
  color:  ${({ colorText }) => colorText ?? ThemeDefaultApp.colors.onPrimary };
  font-weight: bold;
`;

export const ButtonOutline = styled.TouchableOpacity<ButtonDefaultStylesProps>`
  margin-top: 24px;
  width: 100%; 
  height: 55px;
  justify-content: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(disabled) => disabled ? ThemeDefaultApp.colors.primary : ThemeDefaultApp.colors.onSurfaceVariant };
  background-color: transparent;
`;

export const TextButtonOutline = styled.Text<ButtonDefaultStylesProps>`
  text-align: center; 
  color: ${(disabled) => disabled ? ThemeDefaultApp.colors.primary : ThemeDefaultApp.colors.onSurfaceVariant };
  font-weight: bold;
`;
