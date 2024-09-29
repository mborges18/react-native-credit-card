import React, { useRef } from 'react';
import PagerView from 'react-native-pager-view';
import { View } from 'react-native';
import TabTopComponent from 'screens/Authenticator/TabTopComponent';
import SignInScreen from 'screens/Authenticator/SignIn/screens/SignInScreen';
import SignUpScreen from 'screens/Authenticator/SignUp/screens/SignUpScreen';
import { ThemeDefaultApp } from 'utils/AppTheme';

const AuthenticatorScreen = () => {
  return <ViewPagerComponent />;
}

const ViewPagerComponent = () => {
  const pageRef = useRef<PagerView>(null)
  return (
    <View style={{ backgroundColor: ThemeDefaultApp.colors.background, flex: 1, }}>
      <TabTopComponent onClick={(page: number) => {
        pageRef.current?.setPage(page)
      }} />
      <View style={{ flex: 1 }}>
        <PagerView style={{ flex: 1 }} initialPage={0} ref={pageRef}>
          <SignInScreen />
          <SignUpScreen />
        </PagerView>
      </View>
    </View>
  );
}

export default AuthenticatorScreen;