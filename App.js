import * as React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TabNavigation from './components/Navigation/TabNavigation';

import { Button } from 'react-native';
import Login from './components/Customer/Login';
import Splash from './components/Splash';
import axios from 'axios';

axios.defaults.baseURL= 'https://feaa-14-241-120-189.ngrok-free.app/api/'

// const Stack = createNativeStackNavigator();

export default class App extends React.Component{
      constructor(props){
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() =>{
            this.setState({currentScreen : 'TabNavigation'})
        }, 2000)
    }
        render(){
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <TabNavigation/>
        return mainScreen
    }
}