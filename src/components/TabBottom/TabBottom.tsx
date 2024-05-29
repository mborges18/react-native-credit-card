
import React from 'react';
import {View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function TabBottom() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={TabOne}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }: any) => {
              return <Icon name={'home-outline'} size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={TabTwo}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }: any) => {
              return <Icon name={'finger-print-sharp'} size={25} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    );
}

function TabOne() {
    return (
        <View><Text>ViewOne</Text></View>
    );
}

function TabTwo() {
    return (
        <View><Text>ViewTwo</Text></View>
    );
}