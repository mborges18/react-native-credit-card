import { useColorScheme } from 'react-native';

const AppTheme = () => {
    const scheme = useColorScheme();
    return scheme === 'dark' ? ThemeDark  : ThemeLight 
}

type ThemeSchemeDefault = {
  dark: boolean;
  colors: {
    primary: string;
    onPrimary: string;
    secondary: string;
    onSecondary: string;
    error: string;
    onError: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    card: string;
    text: string;
    onText: string;
    border: string;
    notification: string;
  };
};

const ThemeLight: ThemeSchemeDefault = {
  dark: false,
  colors: {
    primary: "#0345ca",
    onPrimary: "#FFFFFF",
    secondary: "#535f70",
    onSecondary: "#FFFFFF",
    error: "#ba1b1b",
    onError: "#FFFFFF",
    background: "#f2f2f2",
    onBackground: "#1b1b1b",
    surface: "#e7f1ff",
    onSurface: "#1b1b1b",
    surfaceVariant: "#dfe2eb",
    onSurfaceVariant: "#a6a6a6",
    card: "#a6a6a6",
    text: "#1f1e1d",
    onText: "#FFFFFF",
    border: "#1b1b1b",
    notification: "#a6a6a6",
  }
}

const ThemeDark: ThemeSchemeDefault = {
  dark: true,
  colors: {
    primary: "#3c4858",
    onPrimary:"#FFFFFF",
    secondary: "#bbc8db",
    onSecondary: "#1b1b1b",
    error: "#ffb4a9",
    onError:"#680003",
    background: "#343434",
    onBackground:"#888b8f",
    surface: "#333333",
    onSurface: "#e2e2e6",
    surfaceVariant: "#3c3e42",
    onSurfaceVariant: "#a6a6a6",
    card: "#a6a6a6",
    text: "#a6a6a6",
    onText: "#FFFFFF",
    border: "#a6a6a6",
    notification: "#a6a6a6",
  }
}

const isDark = false;
export const ThemeDefaultApp = {
  dark: isDark,
  colors: {
    primary: isDark ? "#3c4858" : "#0345ca",
    onPrimary: isDark ? "#FFFFFF" : "#FFFFFF",
    secondary: isDark ?  "#bbc8db" : "#535f70",
    onSecondary: isDark ?  "#1b1b1b" : "#FFFFFF",
    error: isDark ?  "#ffb4a9" : "#ba1b1b",
    onError: isDark ? "#680003" : "#FFFFFF",
    background: isDark ?  "#343434" : "#f2f2f2",
    onBackground: isDark ? "#888b8f" : "#1b1b1b",
    surface: isDark ?  "#333333" : "#e7f1ff",
    onSurface: isDark ?  "#e2e2e6" : "#1b1b1b",
    surfaceVariant: isDark ?  "#3c3e42" : "#dfe2eb",
    onSurfaceVariant: isDark ?  "#a6a6a6" : "#a6a6a6",
    card: isDark ?  "#a6a6a6" : "#a6a6a6",
    text: isDark ?  "#a6a6a6" : "#1f1e1d",
    onText: isDark ?  "#FFFFFF" : "#1f1e1d",
    border: isDark ?  "#a6a6a6" : "#1b1b1b",
    notification: isDark ?  "#a6a6a6" : "#a6a6a6",
  }
}

export const colorError = '#b94e4e';
export const colorSuccess = '#499865';
export const colorInfo = '#5c89b6';
export const colorWarning = '#b2a065';
export const overlay = '#00000087';

export default AppTheme;
