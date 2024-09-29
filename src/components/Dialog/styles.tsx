import styled from "styled-components/native";
import { ThemeDefaultApp, overlay } from 'utils/AppTheme';

type DialogProps = {
  colorContainer: string
}

export const OverLayModal = styled.View`
  flex: 1;
  justify-content: center; 
  align-items: center; 
  background-color: ${() => overlay};
`;

export const ModalDialog = styled.View`
  width: 85%;
  border-radius: 8px;
  background-color: ${ThemeDefaultApp.colors.background}; 
`;

export const HeaderDialog = styled.View<DialogProps>`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  justify-content: center; 
  align-items: center; 
  height: 70px;
  background-color: ${({colorContainer}) => colorContainer};
`;

export const ContainerDialog = styled.View`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center; 
  align-items: center; 
  padding: 16px;
  background-color: ${ThemeDefaultApp.colors.surface};
`;

export const TitleDialog = styled.Text`
  font-size: 22px;
  font-weight: bold; 
  color: ${ThemeDefaultApp.colors.text};
`;

export const DescriptionDialog = styled.Text`
  margin-top: 16px; 
  font-size: 15px; 
  text-align: center;
  color: ${ThemeDefaultApp.colors.text};
`;

export const RowDialog = styled.View`
  flex-direction: row; 
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const SpaceDialog = styled.View`
  width: 8px;
`;