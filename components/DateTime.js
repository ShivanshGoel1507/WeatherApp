import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import moment from 'moment';
import { View,Text, StyleSheet } from "react-native";

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const WeatherItem =(props) => {
   
    return (
        <View style={styles.weatheritem}>
          <Text style={styles.weatheritemTitle}>{props.title}</Text>
          <Text style={styles.weatheritemTitle}>{props.value}{props.unit}</Text>
        </View>
    )
}

const DateTime =({current,lat,lon,timezone})=> {
   
    const [date,setDate] = useState('')
        const [time,setTime] = useState('')
    
        useEffect(()=>{
                setInterval(()=>{
                    const time = new Date();
                    const month = time.getMonth();
                    const get_date = time.getDate();
                    const day = time.getDay();
                    const hour = time.getHours();
                    const hoursIn12hrFormat = hour >=13 ? hour %12:hour
                    const min = time.getMinutes();
                    const ampm = hour>=12?'pm':'am'
                    
                    setTime((hoursIn12hrFormat<10?'0'+hoursIn12hrFormat:hoursIn12hrFormat)
                    +':'+(min<10?'0'+min:min)+' '+ampm)

                    setDate(days[day]+', '+get_date+' '+months[month])
                    
                })
        },[])

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>{time}</Text>
                </View>
                <View>
                    <Text style={styles.subheading}>{date}</Text>
                </View>
                <View style={styles.weatheritemcontainer}>
                    <WeatherItem title="Humidity" value={current? current.humidity : ""} unit="%"/>
                    <WeatherItem title="Pressure" value={current? current.pressure:""}  unit="hPA"/>
                    {/* <WeatherItem title="Sunrise" value={current? moment.tz(current.sunrise*1000,timezone).format('HH:mm'):""}  unit="am"/>
                    <WeatherItem title="Sunset" value={current? moment.tz(current.sunset*1000,timezone).format('HH:mm'):""}  unit="pm"/> */}
                </View>
            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.timezone}>{timezone}</Text>
                <Text style={styles.latlong}>{lat}N {lon}E</Text>
            </View>
        </View>
    )

}

const styles =StyleSheet.create({
          container:{
               flex:1.5,
               flexDirection:"row",
               justifyContent:'space-between',
               padding:15
          },
          heading:{
                fontSize:42,
                color:'white',
                fontWeight:'400'
          },
          subheading:{
                fontSize:30,
                fontWeight:'300',
                color:'#eee'
          },
          rightAlign:{
             textAlign:'right'
          },
          timezone:{
                 fontSize:19,
                 color:'#eee',
                 fontWeight:'600'
          },
          latlong:{
            fontSize:15,
            color:'#eee',
            fontWeight:'600'
          },
          weatheritemcontainer:{
                backgroundColor:'#18181b99',
                borderRadius:10,
                padding:10,
                marginTop:10
          },
          weatheritem:{
              flexDirection:"row",
              justifyContent:'space-between'
          },
       weatheritemTitle:{
            color:'#eee',
            fontSize:14,
            fontWeight:'200'
       }
         
})
export default DateTime;