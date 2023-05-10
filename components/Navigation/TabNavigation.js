import * as React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import Place from '../Items/Place';
import cart from './Cart';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Du lịch"  component={HomeScreen} 
          options={{
            headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),}}
        />
        <Tab.Screen name="Điểm đến" component={Place}
        options={{
          headerShown: false,
          tabBarLabel: 'Điểm đến',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fireplace" color={color} size={size} />
          ),
          
        }}
         />
         <Tab.Screen name="Gio Hang" component={cart}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fireplace" color={color} size={size} />
          ),
          
        }}
         />
        <Tab.Screen name="Tiện ích khác" component={Settings} 
          options={{
            headerShown: false,
          tabBarLabel: 'Tiện ích khác',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hand-extended" color={color} size={size} />
          ),
        }}
        />
       
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}