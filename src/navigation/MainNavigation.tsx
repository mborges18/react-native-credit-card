import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import AuthenticatorScreen from 'screens/authenticator/AuthenticatorScreen';
import CreditCardListScreen from 'screens/creditcard/list/CreditCardListScreen'
import { SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import Theme from 'utils/AppTheme';
import { AuthenticatorProvider } from 'screens/authenticator/AuthenticatorContextApi';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationUrl } from 'navigation/NavigationUrl';
import CreditCardFormScreen from 'screens/creditcard/form/screens/CreditCardFormScreen';

const Stack = createNativeStackNavigator();

// export type ScreenNames = [
//   NavigationUrl.CreditCardListScreen, 
//   NavigationUrl.CreditCardFormScreen,
//   NavigationUrl.ScreenAuthentication
// ] 
// export type RootStackParamList = Record<ScreenNames[number], undefined | {}>;
// export type StackNavigation = NavigationProp<RootStackParamList>;

//const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
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
