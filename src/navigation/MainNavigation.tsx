import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatorScreen from 'screens/Authenticator/AuthenticatorScreen';
import CreditCardListScreen from 'screens/CreditCard/List/screens/CreditCardListScreen'
import CreditCardFormScreen from 'screens/CreditCard/Form/screens/CreditCardFormScreen';
import { SafeAreaView } from 'react-native';
import Theme from 'utils/AppTheme';
import { AuthenticatorProvider } from 'screens/Authenticator/AuthenticatorContextApi';
import { NavigationUrl } from 'navigation/NavigationUrl';
import StatusBarApp from 'components/StatusBar/StatusBar';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const ThemeApp = Theme()

  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBarApp />
      <NavigationContainer>
        <AuthenticatorProvider>
          <Stack.Navigator initialRouteName={NavigationUrl.AuthenticationScreen}>
            <Stack.Screen
              name={NavigationUrl.AuthenticationScreen}
              options={{ headerShown: false }}
              component={AuthenticatorScreen}
            />
            <Stack.Screen
                name={NavigationUrl.CreditCardListScreen}
                options={{ headerShown: false }}
                component={CreditCardListScreen}
            />
            <Stack.Screen
                name={NavigationUrl.CreditCardFormScreen}
                options={{ headerShown: false }}
                component={CreditCardFormScreen}
            />
          </Stack.Navigator>
        </AuthenticatorProvider>
      </NavigationContainer>
    </SafeAreaView>
    </>
  );
};

export default MainNavigation;
