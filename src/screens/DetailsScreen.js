import React,{useEffect,useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'


const DetailsScreen=({navigation, route})=>{
    const movie=route.params.movies.title;
    const [movieDetails, setMovieDetails] =useState(null);

    useEffect(()=>{
        const xhr=new XMLHttpRequest();
        xhr.open('GET',`http://www.omdbapi.com/?apikey=a6571bef&t=${movie}`);
        xhr.send();
        xhr.onload=()=>{
            if(xhr.status=200){
                let response=JSON.parse(xhr.response);
                setMovieDetails(response);
            }else{
                console.log(`Peticion HTTP fallida ${xhr.status}`);
            }
            
        };
    },[]);    
    return(
        <View style={Styles.mainView}>
            <Text style={Styles.textStyle}>{(movieDetails==null?'':movieDetails.Title)}</Text>
            <Text style={Styles.textStyle}>{(movieDetails==null?'':movieDetails.Released)}</Text>
            <Text style={Styles.textStyle}>{(movieDetails==null?'':movieDetails.Plot)}</Text>
        </View>
    );
}

const Styles=StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },textStyle:{
        color:'blue',
        fontSize:18,
        fontFamily:'monospace'
    }
    });

export default DetailsScreen

