import * as React from 'react';
import { Text, View, ScrollView, FlatList,TouchableOpacity,Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Customer/Login';

const Stack = createNativeStackNavigator();

export default function SettingsNavigation(){
    return(
    <Stack.Navigator >
      <Stack.Screen name="Cài đặt" component={Settings} />
    </Stack.Navigator>
    )
}


function Settings({navigation}) {
  return (
    <View>
      <Image></Image>
      <Text>User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width : '100%',
      alignItems:'center',
      backgroundColor: 'lightgray'
    },
    item:{
      width: "95%",
      marginTop: 30,
      height:  40,
      borderRadius : 4,
      borderColor : '#333',
      borderWidth : 1,
      alignItems:'center',
      justifyContent : 'center',
      backgroundColor: '#333'
      
    },
    text:{
      textAlign: 'center',
      fontSize : 15,
      fontWeight: '700',
      justifyContent : 'center',
      color : '#CD5C5C'
    },
    topImage : {
      width : '100%',
      height : '60%'
    },
    image: {
      width : '95%',
      height : '100%',
      borderRadius: 10,
      margin : 10,
    }
});