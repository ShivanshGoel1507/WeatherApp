import React, { Component } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Country,State,City} from 'country-state-city'
import HomeScreen from './components/HomeScreen'
import CityInfo from './components/CityInfo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
     
        <Stack.Screen
          name="CityInfo"
          component={CityInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  
    )
  }
}
const styles = StyleSheet.create({
  viewContainer:{
           flex:1
  },
  item:{
    padding:10,
    marginBottom:10,
    backgroundColor:"#11c7e0",
    width:400,
    marginLeft:300,
    justifyContent:"center",
    alignItems:"center"
  }
})
export default App
