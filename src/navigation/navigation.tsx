import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatorScreen from '../screens/Authenticator/AuthenticatorScreen';
import { SafeAreaView, StatusBar } from 'react-native';
import Theme from '../utils/AppTheme';
import AuthenticatorContextApi, { AuthenticatorProvider } from '../screens/Authenticator/AuthenticatorContextApi';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const ThemeApp = Theme()
  return (
    <>
    <StatusBar barStyle={ ThemeApp.dark ? "light-content" : "dark-content" } backgroundColor={ThemeApp.colors.background} />
    <SafeAreaView style={{ flex: 1,}}>
      <NavigationContainer>
        <AuthenticatorProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AuthenticatorScreen"
              options={{ headerShown: false }}
              component={AuthenticatorScreen}
            />
          </Stack.Navigator>
        </AuthenticatorProvider>
      </NavigationContainer>
    </SafeAreaView>
    </>
  );
};

export default MainNavigation;
