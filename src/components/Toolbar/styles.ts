import styled from "styled-components/native";
import { ThemeDefaultApp, transparent } from "utils/AppTheme";

export const Wrapper = styled.View`
  height: 60px;
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
  background-color: ${ThemeDefaultApp.colors.primary};
`;

export const Title = styled.Text`
  font-weight: bold; 
  padding-left: 16px;
  font-size: 20px; 
  color: ${ThemeDefaultApp.colors.background};
`;

export const ActionButton = styled.TouchableOpacity`
  padding: 8px;
`;