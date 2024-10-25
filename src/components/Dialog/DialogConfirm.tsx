import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { ThemeDefaultApp, colorInfo } from 'utils/AppTheme';
import ButtonDefault from 'components/Button/ButtonDefault';
import ModalDefault from 'components/Dialog/ModalDefault';
import * as S from './styles';
import { DialogProps } from './DialogProps';

const DialogConfirm = (props: DialogProps) => {

  return (
  <ModalDefault dialog={<>
    <S.HeaderDialog colorContainer={colorInfo}>
        <Icon name='questioncircleo' size={38} color={ThemeDefaultApp.colors.background} />
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
        colorContainer={ThemeDefaultApp.colors.onText}
        colorText={ThemeDefaultApp.colors.text}
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