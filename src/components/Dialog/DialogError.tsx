import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme, { colorError } from 'utils/AppTheme';
import ButtonDefault from 'components/button/ButtonDefault';
import ModalDefault from 'components/dialog/ModalDefault';
import * as S from 'components/dialog/styles';
import { DialogProps } from './DialogProps';

const DialogError = (props: DialogProps) => {
  return (
  <ModalDefault dialog={<>
    <S.HeaderDialog colorContainer={colorError}>
      <Icon name='alert-circle-outline' size={48} color={Theme().colors.background} />
    </S.HeaderDialog>
    <S.ContainerDialog>
      <S.TitleDialog>{props.title}</S.TitleDialog>
      <S.DescriptionDialog>{props.description}</S.DescriptionDialog>
      <ButtonDefault
        text={'Ok'}
        isLoading={false}
        isDisabled={false}
        colorContainer={colorError}
        clickListener={
          props.onClickConfirm
        } 
      />
    </S.ContainerDialog>
      </>} isVisible={props.isVisible} />
  );
}

export default DialogError;