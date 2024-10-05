import styled from "styled-components/native";
import { ThemeDefaultApp } from 'utils/AppTheme';

export const TitleHeader = styled.Text`
  margin-top: 16px;
  text-align: center; 
  font-weight: bold; 
  font-size: 26px; 
  text-transform: uppercase; 
  color: ${ThemeDefaultApp.colors.text};
`;

export const SubTitleHeader = styled.Text`
  margin-top: 16px;
  font-weight: bold; 
  font-size: 20px; 
  color: ${ThemeDefaultApp.colors.text};
`;

export const DescriptionHeader = styled.Text`
  margin-top: 8px;
  font-weight: bold; 
  font-size: 16px; 
  color: ${ThemeDefaultApp.colors.text};
`;