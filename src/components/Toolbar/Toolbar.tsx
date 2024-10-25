import React from 'react';
import { ThemeDefaultApp } from 'utils/AppTheme';
import * as S from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

interface ToolbarPros {
  title: string;
  onPress?: () => void;
}

const Toolbar: React.FC<ToolbarPros> = ({ title, onPress }) => {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.ActionButton
        onPress={() => {
          onPress || navigation.goBack();
        }}>
        <ArrowLeft size={24} color={ThemeDefaultApp.colors.background} />
      </S.ActionButton>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};

export default Toolbar;
