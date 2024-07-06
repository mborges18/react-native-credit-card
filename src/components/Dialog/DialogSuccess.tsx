import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme, { colorSuccess } from 'utils/AppTheme';
import ButtonDefault from 'components/button/ButtonDefault';
import ModalDefault from 'components/dialog/ModalDefault';
import * as S from 'components/dialog/styles';
import { DialogProps } from './DialogProps';

const DialogSuccess = (props: DialogProps) => {
  return (
  <ModalDefault dialog={<>
    <S.HeaderDialog colorContainer={colorSuccess}>
      <Icon name='check-circle-outline' size={48} color={Theme().colors.background} />
    </S.HeaderDialog>
    <S.ContainerDialog>
      <S.TitleDialog>{props.title}</S.TitleDialog>
      <S.DescriptionDialog>{props.description}</S.DescriptionDialog>
      <ButtonDefault
        text={'Ok'}
        isLoading={false}
        isDisabled={false}
        colorContainer={colorSuccess}
        clickListener={
          props.onClickConfirm
        } 
      />
    </S.ContainerDialog>
  </>} isVisible={props.isVisible} />
  );
}

export default DialogSuccess;
