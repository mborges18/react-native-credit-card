import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatorScreen from '../screens/Authenticator/AuthenticatorScreen';
import CreditCardListScreen from '../screens/CreditCard/CreditCardListScreen'
import { SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import Theme from '../utils/AppTheme';
import { AuthenticatorProvider } from '../screens/Authenticator/AuthenticatorContextApi';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const ThemeApp = Theme()

  const ScreenAuthentication = () => {
    return(
      <AuthenticatorScreen />
    );
  }
  
  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar animated={true} barStyle={ ThemeApp.dark ? "light-content" : "dark-content" } backgroundColor={
      ThemeApp.dark ? ThemeApp.colors.onBackground : ThemeApp.colors.background 
      } />
      <NavigationContainer>
        <AuthenticatorProvider>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="ScreenAuthentication"
              options={{ headerShown: false }}
              component={ScreenAuthentication}
            /> */}
            <Stack.Screen
                name="CreditCardListScreen"
                options={{
                    title: 'CreditCard',
                    headerTitleStyle: { color: ThemeApp.colors.background }, 
                    headerStyle: { backgroundColor: ThemeApp.colors.primary },
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginEnd: 16 }} activeOpacity={0.5}>
                             <Icon name='arrow-left' size={24} color={ThemeApp.colors.background}/>
                        </TouchableOpacity>
                    ),
                }}
                component={CreditCardListScreen}
            />
          </Stack.Navigator>
        </AuthenticatorProvider>
      </NavigationContainer>
    </SafeAreaView>
    </>
  );
};

export default MainNavigation;
