import styled from "styled-components/native";
import Theme from 'utils/AppTheme';

type CreditCardListStyleProps = {
  isOpen?: boolean;
  textSize?: number;
  letterSpacing?: number;
  marginTop?: number;
}

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.SafeAreaView`
  margin-vertical: 16px;
`;

export const FloatButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 16px; 
  right: 16px;; 
  z-index: 10; 
  padding: 16px;; 
  border-radius: 16px;
  background-color: ${()=> Theme().colors.primary};
`;

export const Card = styled.View<CreditCardListStyleProps>`
  padding: 16px; 
  height: 210px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: ${({isOpen}) => isOpen ? 8 : 0}px;
  border-bottom-right-radius: ${({isOpen}) => isOpen ? 8 : 0}px;
`;

export const TopCard = styled.View`
  flex-direction: row; 
  justify-content: space-between; 
`;

export const MiddleCard = styled.View`
  margin-top: 35px; 
  flex-direction: row; 
  justify-content: space-evenly;
`;

export const BottomCard = styled.View`
  flex-direction: row; 
  justify-content: space-evenly;
  align-items: center;
  margin-vertical: 8px;
`;

export const CardBlackTrace = styled.View`
  width: 100%; 
  height: 50px; 
  background-color: #000;
`;

export const CardWhiteTrace = styled.View`
  justify-content: center;
  margin-top: 20px; 
  width: 100%; 
  height: 50px; 
  background-color: #FFF;
`;

export const TextCard = styled.Text<CreditCardListStyleProps>`
    margin-top: ${({marginTop}) => marginTop ?? 0};
    color: ${()=> Theme().colors.onText }; 
    font-size: ${({textSize})=> textSize }px; 
    font-weight: bold;
    text-shadow: 1px 1px 2px ${()=> Theme().colors.onBackground };
    letter-spacing: ${({letterSpacing})=> letterSpacing ?? 0 }px;

`;

