import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatorScreen from 'screens/authenticator/AuthenticatorScreen';
import CreditCardListScreen from 'screens/creditcard/list/CreditCardListScreen'
import { SafeAreaView, StatusBar } from 'react-native';
import Theme from 'utils/AppTheme';
import { AuthenticatorProvider } from 'screens/authenticator/AuthenticatorContextApi';
import { NavigationUrl } from 'navigation/NavigationUrl';
import CreditCardFormScreen from 'screens/creditcard/form/screens/CreditCardFormScreen';
import { LogBox } from 'react-native';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const ThemeApp = Theme()

  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar animated={true} barStyle={ ThemeApp.dark ? "light-content" : "dark-content" } backgroundColor={
      ThemeApp.dark ? ThemeApp.colors.onBackground : ThemeApp.colors.background 
      } />
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
                options={{
                    title: 'CreditCard',
                    headerTitleStyle: { color: ThemeApp.colors.background }, 
                    headerStyle: { backgroundColor: ThemeApp.colors.primary },
                }}
                component={CreditCardListScreen}
            />
            <Stack.Screen
                name={NavigationUrl.CreditCardFormScreen}
                options={{
                    title: 'CreditCard',
                    headerTitleStyle: { color: ThemeApp.colors.background }, 
                    headerStyle: { backgroundColor: ThemeApp.colors.primary },
                }}
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
