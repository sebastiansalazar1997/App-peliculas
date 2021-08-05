import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={Styles.mainView}>
            <Text>Home Screen</Text>
            <TouchableOpacity
            style={Styles.touchView}
                onPress={() => {
                    navigation.navigate("Home_to_Details",
                        {
                            movies: {
                                title: 'Star wars',
                                release: 1977,
                                screenNumber: 1
                            }
                        })
                }}>
                <View>
                    <Text style={Styles.touchText}>
                    Star wars
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.touchView}
                onPress={() => {
                    navigation.navigate("Home_to_Details",
                        {
                            movies: {
                                title: 'Pantera negra',
                                release: 2018,
                                screenNumber: 1
                            }
                        })
                }}>
                <View>
                    <Text style={Styles.touchText}>
                    Pantera negra
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.touchView}
                onPress={() => {
                    navigation.navigate("Home_to_Details",
                        {
                            movies: {
                                title: 'Matrix',
                                release: 1995,
                                screenNumber: 1
                            }
                        })
                }}>
                <View>
                    <Text style={Styles.touchText}>
                    Matrix
                    </Text>
                </View>
            </TouchableOpacity>
            
        </View>
    );
}

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableView:{
        marginBottom:30,
        width:150,
        height:50,
        alignItems:'center',
        backgroundColor:'orange',
        borderWidth:5,
        borderRadius:10,        
        },
        touchText:{
            textAlign:'center',
            padding:5,
            fontSize:20,
            fontWeight:'bold',
            color:'black'
        }
});

export default HomeScreen