import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeDefaultApp } from 'utils/AppTheme';

const StatusBarApp = () => {
    return (
        <StatusBar animated={true} barStyle={ ThemeDefaultApp.dark ? "light-content" : "dark-content" } backgroundColor={
            ThemeDefaultApp.dark ? ThemeDefaultApp.colors.onBackground : ThemeDefaultApp.colors.background 
            } />
    );
}

export default StatusBarApp;