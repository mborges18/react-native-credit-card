import styled from 'styled-components/native';
import Theme from 'utils/AppTheme';

type ButtonDefaultProps = {
    width?: number,
    colorText?: string
}

export const Button = styled.TouchableOpacity<ButtonDefaultProps>`
    margin-top: 24px;
    height: 55px;
    justify-content: center;
    border-radius: 8px;
    width:  ${({ width }) => width ?? 100}%;
    background-color: ${({ disabled }) => disabled ? Theme().colors.onSurfaceVariant : Theme().colors.primary };
    /* shadow-color: 'rgba(0,0,0, .4)'; // IOS
    shadow-offset: { height: 1; width: 1 }; // IOS
    shadow-opacity: 1; // IOS
    shadow-radius: 1; //IOS
    elevation: 2; // Android */
`;

export const TextButton = styled.Text<ButtonDefaultProps>`
    text-align: center; 
    color:  ${({ colorText }) => colorText ?? Theme().colors.onPrimary };
    font-weight: bold;
`;