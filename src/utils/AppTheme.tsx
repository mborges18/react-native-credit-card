import { useColorScheme } from 'react-native';

const AppTheme = () => {
    const scheme = useColorScheme();
    return scheme === 'dark';
}

const isDark = false;

export const ThemeDefaultApp = {
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
