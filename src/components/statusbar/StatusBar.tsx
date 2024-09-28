import React from 'react';
import Theme from 'utils/AppTheme';
import { StatusBar } from 'react-native';

const StatusBarApp = () => {
    const ThemeApp = Theme()
    return (
        <StatusBar animated={true} barStyle={ ThemeApp.dark ? "light-content" : "dark-content" } backgroundColor={
            ThemeApp.dark ? ThemeApp.colors.onBackground : ThemeApp.colors.background 
            } />
    );
}

export default StatusBarApp;