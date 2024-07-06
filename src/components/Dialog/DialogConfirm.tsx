import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import Theme, { colorInfo } from 'utils/AppTheme';
import ButtonDefault from 'components/button/ButtonDefault';
import ModalDefault from 'components/dialog/ModalDefault';
import * as S from 'components/dialog/styles';
import { DialogProps } from './DialogProps';

const DialogConfirm = (props: DialogProps) => {

  return (
  <ModalDefault dialog={<>
    <S.HeaderDialog colorContainer={colorInfo}>
        <Icon name='questioncircleo' size={38} color={Theme().colors.background} />
    </S.HeaderDialog>
    <S.ContainerDialog>
      <S.TitleDialog>{props.title}</S.TitleDialog>
      <S.DescriptionDialog>{props.description}</S.DescriptionDialog>
      <S.RowDialog>
      <ButtonDefault
        text={'Cancelar'}
        isLoading={false}
        isDisabled={false}
        colorContainer={colorInfo}
        clickListener={
          () => { props.onClickCancel?.() }
        } 
      />
      <S.SpaceDialog />
      <ButtonDefault
        text={'Confirmar'}
        isLoading={false}
        isDisabled={false}
        colorContainer={Theme().colors.onText}
        colorText={Theme().colors.onBackground}
        clickListener={
          props.onClickConfirm
        } 
      />
      </S.RowDialog>
    </S.ContainerDialog>
  </>} isVisible={props.isVisible} />
  );
}

export default DialogConfirm;