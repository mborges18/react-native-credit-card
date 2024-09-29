import { ThemeDefaultApp } from "utils/AppTheme";
import * as S from "./styles"
import { ArrowLeft } from 'phosphor-react-native';

const Toolbar = () => {
  return (
  <S.Wrapper>
    <ArrowLeft size={24} color={ThemeDefaultApp.colors.background}/>
    <S.Title>Cartão de crédito</S.Title>
  </S.Wrapper>
  );
}

export default Toolbar;