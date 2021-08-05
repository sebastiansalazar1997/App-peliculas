import React from 'react'
import {Button,View, Text, StyleSheet} from 'react-native'

const ImageScreen=({navigation,route})=>{
    console.log(route);
    return(
        <View style={Styles.mainView}>
            <Text>Imagenes</Text>
            <Button
            title='ir al Inicio'
            onPress={()=>{navigation.popToTop()}}
            />
        </View>
    );
}

const Styles=StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
});

export default ImageScreen