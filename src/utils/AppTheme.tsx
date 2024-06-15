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

export const colorError = '#b94e4e';
export const colorSuccess = '#499865';
export const colorInfo = '#5c89b6';
export const colorWarning = '#b2a065';

export default AppTheme;
