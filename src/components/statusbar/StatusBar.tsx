import React from 'react';
import Theme from 'utils/AppTheme';
import { StatusBar } from 'react-native';

const StatusBarApp = () => {
    return (
        <StatusBar barStyle="light-content" backgroundColor={ Theme().colors.primary } />
    );
}

export default StatusBarApp;