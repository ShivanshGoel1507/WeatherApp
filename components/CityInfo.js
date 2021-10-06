import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import  DateTime  from '../components/DateTime'
import WeatherScroll from '../components/WeatherScroll';
//import CityList from '../components/CityList';



const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';
const img = require('../assets/images.jpg')

function CityInfo({route}) {
  const [data,setData] = useState({});

   useEffect(()=>{
    navigator.geolocation.getCurrentPosition((success)=>{
   
      let {latitude,longitude}=success.coords;

       fetchdata(route)
  }, (err) =>{
    if(err){
      fetchdata("28.9845","77.7064")
    }
  }
  )
},[]) 


const fetchdata = (route) =>{
  

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${route.params.latitude}&lon=${route.params.longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
      console.log(route.params.latitude);
      setData(data);
     
    }
  )
}

//let {latitude,longitude} = this.props;
  return (
    <>
    {console.log(route)}
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imge}>
       <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
       <WeatherScroll weatherD={data.daily}/>
      
      </ImageBackground>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imge:{
    flex:1,
     resizeMode:"cover",
     justifyContent:"center"
  },

});
export default CityInfo