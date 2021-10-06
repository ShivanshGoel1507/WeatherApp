import React from 'react';
import { View, Image,Text, StyleSheet } from 'react-native';
import moment from 'moment';

const FututreForecast = ({data})=>{
 
        return(
           <View style={{flexDirection:'row'}}>
{
      data && data.length>0 ? 
      data.map((data,ind)=>(
        ind !==0 && <FutureForecastItem key={ind} forcastItem={data}/>
      ))
      :
      <View/>
}
                 
           </View>
        )
}

const FutureForecastItem = ({forcastItem})=> {

    
        const img = {uri:'https://openweathermap.org/img/wn/'+forcastItem.weather[0].icon+'@2x.png'}
        return(
            <View style={styles.FutureForecastItemContainer}>
                <Text style={styles.day}>{moment(forcastItem.dt * 1000).format('ddd')}</Text>
                <Image source={img} style={styles.image}/>
                <Text style={styles.temp}>Night-{forcastItem.temp.night}&#176;c</Text>
                <Text style={styles.temp}>Day-{forcastItem.temp.day}&#176;c</Text>
            </View>
        )
}

export default FututreForecast;

const styles = StyleSheet.create({
     image:{
         width:100,
         height:100
     },
     FutureForecastItemContainer:{
         flex:1,
        justifyContent:'center',
        backgroundColor:'#00000033',
        borderRadius:10,
        borderColor:'#eee',
        borderWidth:1,
        padding:20,
        marginLeft:10
     },
     day:{
        fontSize:20,
        color:"white",
        backgroundColor:"#3c3c44",
        padding:10,
        textAlign:'center',
        borderRadius:50,
        fontWeight:"200",
        marginBottom:15
     },
     temp:{
        fontSize:14,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
     }
})