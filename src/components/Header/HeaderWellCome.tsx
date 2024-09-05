import React from 'react'
import Theme from 'utils/AppTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as S from "./styles"

type HeaderWellComeProps = {
  title: string,
  iconName: string,
  subTitle: string,
  description: string
}

const HeaderWellCome = (props: HeaderWellComeProps) => {

  return (
    <>
      <S.TitleHeader>
          <Icon name={props.iconName} size={24} color={Theme().colors.text} /> {props.title}
      </S.TitleHeader>
      <S.SubTitleHeader>{props.subTitle}</S.SubTitleHeader>
      <S.DescriptionHeader>{props.description}</S.DescriptionHeader>
    </>
  );
}

export default HeaderWellCome;
