import * as React from 'react';
import { StyleSheet, ScrollView,Button, View, SafeAreaView, Text, Alert,TextInput,Image,Pressable } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../Customer/Register'
import { useState,useEffect } from 'react';
import { TouchableOpacity } from 'react-native-web';


const Stack = createNativeStackNavigator();
export default function LoginNavigation(){
    return(
    <Stack.Navigator >
    <Stack.Screen name="login" component={Login}   options={{headerShown: false}}/>
    <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

function Login({navigation}) {
    return(
        <ScrollView>
        <View style={styles.container}>
        <View style= {{ paddingTop : 50,  alignItems : 'center',
                justifyContent : 'center' }}>
            <Image  style={styles.image} source={require('../Image/logo.png')} />
            <View style={{ paddingTop: 30,paddingBottom : 10 }}>
            <TextInput 
            style={styles.text}
            placeholder = 'User Name'
            />
            </View>
            <View style={{ paddingBottom : 25 }}>
            <TextInput 
            style={styles.text} 
            placeholder = 'Password'
            />
            </View>
            <TouchableOpacity onPress={()=>{ xuly() }}>
            <Pressable style={styles.button} >
            <Text style={{ fontSize : 18, fontWeight : '700', color : '#fff' }}>Login</Text>
            </Pressable>
            </TouchableOpacity>
            <Text style={{ paddingTop : 30, fontSize : 16, fontWeight : '600', color : '#CBC8D0' }}>Or login with</Text>
            </View>
            
            <View style ={{  justifyContent: 'center',
                                paddingTop : 10,
                                flex: 1,
                                margin: 10,
                                flexDirection: 'row',
                                }}>
            <Image  style={styles.logo} source={require('../Image/facebook.png')} />
            <Image  style={{width: 45,height: 45,borderRadius: 200 / 2, marginRight : 25 , marginLeft : 25 , borderWidth : 1.5,
        borderColor : '#8B8B8B'}}  source={require('../Image/instagram.png')} />
            <Image  style={styles.logo} source={require('../Image/google.png')} />
            </View>
            <View style={styles.register}>
                <Text style={styles.check}>Don't you have account ? Register here !</Text>
                <Pressable style={styles.button} onPress={()=> navigation.navigate('register')} >
                    <Text style={{ fontSize : 18, fontWeight : '700', color : '#fff' }}>Register</Text>
                </Pressable>
            </View>

        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    logo:{
        width: 45,
        height: 45,
        borderRadius: 200 / 2,
        borderWidth : 1.5,
        borderColor : '#8B8B8B'
    },
    container: {
        flex : 1,
        backgroundColor : '#fff'
    },
    check: {
        paddingBottom: 15,
        fontSize : 16,
        
    },
    text: {
        color : '#333',
        borderRadius : 10,
        elevation: 5,
       
        paddingLeft : 20,
        width : 220,
        height : 40,
        fontWeight : '600',
        backgroundColor : '#fff',
    },
    image : {
        width : 200
    },
    button : {
        backgroundColor : '#333',
        width : 220,
        height : 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 10,
    },
    register: {
        alignItems: 'center',
        justifyContent : 'center',
        paddingBottom : 40
    }
})