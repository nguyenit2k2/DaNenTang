import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Login from './Customer/Login';

export default function Splash({navigation}){
    return(
        <View style={styles.container}>
            <Image  style={styles.image} source={require('./Image/logo.png')} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor : '#fff',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    image : {
        width : 200
    }
})