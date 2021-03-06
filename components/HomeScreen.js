import React, { Component } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Country,State,City} from 'country-state-city'
import {CityInfo} from "../components/CityInfo";


class HomeScreen extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      cities: City.getCitiesOfCountry('IN'),
      latitude: 0,
      longitude: 0,
    }
    console.log(this.state.cities);
  }

  
  
  render(){

    let { navigation } = this.props;
    let {latitude, longitude ,cities} = this.state;
    return(
      <View style={styles.viewContainer}>
        <View style={{justifyContent:"center",alignItems:"center",fontSize:26,margin:10,fontWeight:"300"}}>
          <Text style={{fontSize:26,fontWeight:"600"}}>Welcome To Weather App</Text>
        </View>
        <Text></Text>
         <FlatList
               data={this.state.cities}
              renderItem={({item,i})=>
        
              <TouchableOpacity style={styles.item} key={i} onPress={() =>{
                this.props.navigation.navigate('CityInfo',{
                   latitude:item.latitude,
                   longitude:item.longitude,
                });
              }}>
              <Text>{item.name}</Text>
              </TouchableOpacity>
         
            }
           />
      </View>
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
export default HomeScreen
