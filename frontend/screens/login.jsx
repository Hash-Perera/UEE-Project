import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const handleSignUpBtn = () => {
    navigation.navigate('SignUp');
  }
  const handleBack = ()=>{
    navigation.navigate('GetStarted');
  }
  const handleLogin = ()=>{
    navigation.navigate('GeneralNavigation');
  }
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/loginBackground.png')} style={styles.backgroundImage} resizeMode='cover' />
        <TouchableOpacity style={{position: 'absolute', top: '10%', left: '1%'}} onPress={handleBack}>
          <Image source={require('../assets/images/backIcon.png')} />
        </TouchableOpacity>
        <Text style={styles.welcomeText}>
          Welcome{'\n'} back
        </Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
      label="Username"
      mode = 'outlined'
     placeholder = 'Enter username'
    />
      <TextInput
      label="password"
      mode = 'outlined'
     placeholder = 'Enter password'
     secureTextEntry={true}
     style={{marginTop: 20}}
    />
    <TouchableOpacity style={{marginTop: 20, left: '68%'}}>
      <Text style={{color: '#8D7AAA'}}>Forgot Password?</Text>
    </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
      <TouchableOpacity style={styles.loginButton} onPress ={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signButton} onPress = {handleSignUpBtn}>
              <Text style={styles.signButtonText}>Sign up</Text>
            </TouchableOpacity>
     </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '60%', 
  },
  welcomeText: {
    position: 'absolute',
    top: '38%',
    left: '25%',
    transform: [{translateX: -100}, {translateY: -100}],
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff', 
  },
  inputContainer:{
    margin : 30,
    marginTop : -100
  },
  loginButton: {
    backgroundColor: "#16213E", 
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "65%",
    alignSelf: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff", 
    fontSize: 18,
    fontWeight: "bold",
  },
  signButton: {
    backgroundColor: "#A5B2D2", 
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "65%",
    alignSelf: "center",
    marginTop: 20,
  },
  signButtonText: {
    color: "#070A35",
    fontSize: 18,
    fontWeight: 300,
  },
  
})
