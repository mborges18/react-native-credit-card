import React, { useRef } from 'react';
import PagerView from 'react-native-pager-view';
import { View } from 'react-native';
import TabTopComponent from 'screens/authenticator/TabTopComponent';
import SignInScreen from 'screens/authenticator/signin/SignInScreen';
import SignUpScreen from 'screens/authenticator/signup/SignUpScreen';
import Theme from 'utils/AppTheme';

const AuthenticatorScreen = () => {
    return <ViewPagerComponent />;
}
  
const ViewPagerComponent = () => {
  const pageRef = useRef<PagerView>(null)
  const ThemeApp = Theme()

    return (
      <View style={{ backgroundColor: ThemeApp.colors.background, flex: 1,}}>
      <TabTopComponent onClick={ (page: number) => {
        pageRef.current?.setPage(page)
        } } />
      <View style={{flex: 1}}>
      <PagerView style={{flex: 1}} initialPage={0} ref={pageRef}>
        <SignInScreen />
        <SignUpScreen />
      </PagerView>
      </View>
      </View>
    );
}

export default AuthenticatorScreen;