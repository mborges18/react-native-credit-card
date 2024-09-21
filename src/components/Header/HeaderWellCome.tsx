import React, { ReactNode } from 'react'
import * as S from "./styles"

type HeaderWellComeProps = {
  title: string,
  icon: any,
  subTitle: string,
  description: string
}

const HeaderWellCome = (props: HeaderWellComeProps) => {

  return (
    <>
      <S.TitleHeader>
        {props.icon} {props.title}
      </S.TitleHeader>
      <S.SubTitleHeader>{props.subTitle}</S.SubTitleHeader>
      <S.DescriptionHeader>{props.description}</S.DescriptionHeader>
    </>
  );
}

export default HeaderWellCome;
