
export type DialogProps = {
    isVisible: boolean,
    title: string,
    description: string,
    onClickConfirm: () => void,
    onClickCancel?: () => void
  }