import React from 'react';
import PagerView from 'react-native-pager-view';
import { View } from 'react-native';
import TabTopComponent from './TabTopComponent';
import SignInScreen from './SignIn/SignInScreen';
import SignUpScreen from './SignUp/SignUpScreen';
import Theme from '../../utils/AppTheme';

const AuthenticatorScreen = () => {
    return <ViewPagerComponent />;
}
  
const ViewPagerComponent = () => {
  const ThemeApp = Theme()
    return (
      <View style={{ backgroundColor: ThemeApp.colors.background, flex: 1,}}>
      <TabTopComponent />
      <View style={{flex: 1}}>
      <PagerView style={{flex: 1}} initialPage={0}>
        <SignInScreen />
        <SignUpScreen />
      </PagerView>
      </View>
      </View>
    );
}

export default AuthenticatorScreen;