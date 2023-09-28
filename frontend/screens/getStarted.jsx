import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const GetStarted = () => {
    const navigation = useNavigation();
    const handleGetStarted = ()=>{
        navigation.navigate('Login');
      }

  return (
    <View style={style.container}>
      <Image source={require('../assets/images/EventGoSplash.png')}  style={style.logo}/>
      <TouchableOpacity style={style.loginButton} onPress ={handleGetStarted}>
              <Text style={style.loginButtonText}>GetStarted</Text>
            </TouchableOpacity>
    </View>
  )
}

export default GetStarted

const style = StyleSheet.create({
    container:{
       backgroundColor: '#fff',
       width: '100%',
         height: '100%',
    },
    logo:{
        width: 470,
        height: 470,
        marginRight: 30,
        marginTop: 230,
        resizeMode: 'cover',
        alignSelf: 'center',
        alignItems  : 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: "#16213E", // Button background color
        padding: 15,
        borderRadius: 25,
        alignItems: "center",
        width: "65%",
        alignSelf: "center",
        marginTop: 120,
      },
      loginButtonText: {
        color: "#fff", // Button text color
        fontSize: 18,
        fontWeight: "bold",
      },
    })
