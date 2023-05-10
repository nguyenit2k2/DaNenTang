import * as React from 'react';
import { StyleSheet, Button,ScrollView, View, SafeAreaView, Text, Alert,TextInput,Image,Pressable, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useState, useEffect } from 'react';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage";


// function NewCustomer(id,username,password,info,name){
//     firebase.data().ref('user/').push().set({
//       Id : id,
//       Name: name,
//       Username : username,
//       Password : password,
//       Info : info
//     }, function(error){
//         if(error){
//             alert('Lỗi')
//         }else {
//             alert('Thành công !!!')
//         }
//     });
// }

export default function Register({navigation}){
    
    return(
        <ScrollView>
        <View style={styles.container}>
        <View style= {{ paddingTop : 40,  alignItems : 'center',
                justifyContent : 'center' }}>
            <Image  style={styles.image} source={require('../Image/logo.png')} />
            <View style={{ paddingTop: 20,paddingBottom : 10 }}>
            <TextInput 
            style={styles.text}
            placeholder = 'User Name'/>
            {/* // onChangText={(text) => { setUsername(text) }} value={username}  */}
            </View>
            <View style={{ paddingBottom : 10 }}>
            <TextInput 
            style={styles.text} 
            placeholder = 'Name'/>
            {/* // onChangText={(text) => { setName(text) }} value={name}  */}
            </View>
            <View style={{ paddingBottom : 10 }}>
            <TextInput 
            style={styles.text} 
            placeholder = 'Email or phone'/>
            {/* // onChangText={(text) => { setInfo(text) }} value={info}  */}
            </View>
            <View style={{ paddingBottom : 25 }}>
            <TextInput 
            style={styles.text} 
            placeholder = 'Password'  />
            {/* // onChangText={(text) => { setPassword(text) }} value={password}  */}
            </View>
            <TouchableOpacity>
            <Pressable style={styles.button} >
            <Text style={{ fontSize : 18, fontWeight : '700', color : '#fff' }}>Register</Text>
            </Pressable>
            </TouchableOpacity>
            <Text style={{ paddingTop : 20, fontSize : 16, fontWeight : '600', color : '#CBC8D0' }}>Or register with</Text>
            </View>
            
            <View style ={{  justifyContent: 'center',
                                paddingTop : 5,
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
                <Text style={styles.check}>Do you have account ? Login here !</Text>
                <Pressable style={styles.button} onPress={()=> navigation.navigate('login')}>
                    <Text style={{ fontSize : 18, fontWeight : '700', color : '#fff' }}>Login</Text>
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