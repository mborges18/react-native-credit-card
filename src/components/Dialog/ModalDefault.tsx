import React from 'react'
import { Modal } from 'react-native'
import * as S from 'components/dialog/styles';

type DialogProps = {
  isVisible: boolean,
  dialog: React.JSX.Element
}

const ModalDefault = (props: DialogProps) => {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={() => {
    }}>
      <S.OverLayModal>
        <S.ModalDialog>
          {props.dialog}
        </S.ModalDialog>
      </S.OverLayModal>
    </Modal>
  );
}

export default ModalDefault;