import { DimensionValue } from 'react-native';
import styled from 'styled-components/native';
import Theme from 'utils/AppTheme';

type ButtonDefaultStylesProps = {
  width?: number,
  colorText?: string;
  colorContainer?: string;
  isDisabled?: boolean
}

const handlerColor = (props: ButtonDefaultStylesProps) => {
  var color = Theme().colors.primary
  if(props.colorContainer!=null) {
    if(props.isDisabled) {
      color = Theme().colors.onSurfaceVariant
    } else {
      color = props.colorContainer
    }
  } else {
    if(props.isDisabled) {
      color = Theme().colors.onSurfaceVariant
    } else {
      color = Theme().colors.primary
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
  color:  ${({ colorText }) => colorText ?? Theme().colors.onPrimary };
  font-weight: bold;
`;

export const ButtonOutline = styled.TouchableOpacity<ButtonDefaultStylesProps>`
  margin-top: 24px;
  width: 100%; 
  height: 55px;
  justify-content: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(disabled) => disabled ? Theme().colors.primary : Theme().colors.onSurfaceVariant };
  background-color: transparent;
`;

export const TextButtonOutline = styled.Text<ButtonDefaultStylesProps>`
  text-align: center; 
  color: ${(disabled) => disabled ? Theme().colors.primary : Theme().colors.onSurfaceVariant };
  font-weight: bold;
`;
